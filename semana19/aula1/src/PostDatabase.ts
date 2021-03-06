import { BaseDatabase } from "./BaseDatabase";
import { PostDTO } from "./model/input/PostDTO";
import { GetFeedDTO } from "./model/output/GetFeedDTO";
import { GetFeedTypeDTO } from "./model/output/GetFeedTypeDTO";

export class PostDatabase extends BaseDatabase {
    
    private static TABLE_NAME = "Post";

    public async createPost(data: PostDTO): Promise<void> {
        try {
            await super.getConnection().raw(`
                INSERT INTO ${PostDatabase.TABLE_NAME}
                VALUES ("${data.id}","${data.text}","${data.create_at}","${data.id_user}","${data.type}","${data.photo}")
            `);
        } catch (error) {
            throw new Error (error.message);
        } finally {
            await super.destroyConnection();
        }
    }

    public async getFeed(id: String): Promise<GetFeedDTO> {
        try {
            const result = await super.getConnection().raw(`
                SELECT ${PostDatabase.TABLE_NAME}.id, text, create_at, id_user, type, name FROM ${PostDatabase.TABLE_NAME}
                JOIN Users ON Users.id = ${PostDatabase.TABLE_NAME}.id_user
                JOIN Followers ON Followers.idUser = Users.id
                WHERE Followers.idFollower = "${id}"
                ORDER BY ${PostDatabase.TABLE_NAME}.create_at DESC;
            `);

            return result[0].map((item: any) => {
                return {
                    id: item.id,
                    text: item.text,
                    create_at: item.create_at, 
                    id_user: item.id_user,
                    type: item.type,
                    name: item.name
                }
            });
        } catch (error) {
            throw new Error (error.message);
        } finally {
            super.destroyConnection();
        }
    }

    public async getFeedType(type: string): Promise<GetFeedTypeDTO> {
        try {
            const result = await super.getConnection().raw(`
                SELECT ${PostDatabase.TABLE_NAME}.id, text, create_at, type FROM ${PostDatabase.TABLE_NAME}
                WHERE type = "${type}";
            `);

            return result[0].map((item: any) => {
                return {
                    id: item.id,
                    text: item.text,
                    create_at: item.create_at,
                    type: item.type
                }
            });
        } catch (error) {
            throw new Error (error.message);
        } finally {
            await super.destroyConnection();
        }
    }

    public async getPostId(id: string) {
        try {
            const result = await super.getConnection().raw(`
                SELECT * FROM Post WHERE id = "${id}"
            `)
            return {
                "create_at": String(result[0][0].create_at),
                "id": result[0][0].id, 
                "id_user": result[0][0].id_user, 
                "photo": result[0][0].photo, 
                "text": result[0][0].text, 
                "type": result[0][0].type
                
            }
        } catch (error) {
            
        }
        finally{
            await super.destroyConnection();
        }
    }

    public async deletePostId(id: string) {
        try {
            await super.getConnection().raw(`
                DELETE FROM Post WHERE id = "${id}"
            `);
        } catch (error) {
            
        } finally {
            await super.destroyConnection();
        }
    }

}
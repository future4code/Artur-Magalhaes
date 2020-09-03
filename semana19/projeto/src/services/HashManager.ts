import bcrypt from 'bcrypt';

export class HashManager {

    public async hash(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(Number(process.env.ROUNDS))
        const result = await bcrypt.hash(password, salt);
        return result;
    }

    public async compare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash)
    }
}
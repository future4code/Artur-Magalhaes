import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole } from "../../src/model/User";

describe.skip("Testando o login na camada de Business", ()=>{

    let userDatabase = {
       
    };
    let hashGenerator = {
        
    };
    let idGenerator = {
        
    }

    let tokenGenerator = {
        generate: jest.fn(()=> "token")
    };

    test("Deve retornar erro quando o e-mail está vazio", async ()=>{

        try {

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashGenerator as any,
                tokenGenerator as any
                );

            await userBusiness.login("", "bananinha");
            
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Deve retornar erro quando a senha está vazia", async ()=>{

        try {

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashGenerator as any,
                tokenGenerator as any
                );

            await userBusiness.login("astrodev@gmail.com", "");
            
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Deve retornar erro quando o usuário não é encontrado", async ()=>{
        expect.assertions(3);
        let getUserByEmail = jest.fn((email: string)=>{return undefined});
        try {

            userDatabase = {getUserByEmail};

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashGenerator as any,
                tokenGenerator as any
                );

            await userBusiness.login("notFound@gmail.com", "bananinha");
            
        } catch (error) {
            expect(error.errorCode).toBe(404);
            expect(error.message).toEqual("User not found");
            expect(getUserByEmail).toHaveBeenCalledWith("notFound@gmail.com");
        }
    });

    test("Deve retornar erro quando o usuário passou a senha incorreta", async ()=>{
        expect.assertions(4);
        let getUserByEmail = jest.fn((email: string)=>{
            return new User("id", "Astrodev", "astrodev@gmail.com", "bananinha", UserRole.ADMIN);
        });

        let compareHash = jest.fn((password: string, userPassword: string)=> false);

        try {
            userDatabase = {getUserByEmail};
            hashGenerator = {compareHash};
            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashGenerator as any,
                tokenGenerator as any
                );

            await userBusiness.login("astrodev@gmail.com", "maxixezinho");
            
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Invalid password");
            expect(getUserByEmail).toHaveBeenCalledWith("astrodev@gmail.com");
            expect(compareHash).toHaveBeenCalledWith("maxixezinho", "bananinha");
        }
    });



    test("Deve retornar token quando todos os dados estiverem corretos", async ()=>{
        expect.assertions(3);
        let getUserByEmail = jest.fn((email: string)=>{
            return new User("id", "Astrodev", "astrodev@gmail.com", "bananinha", UserRole.ADMIN);
        });

        let compareHash = jest.fn((password: string, userPassword: string)=> true);

        try {
            userDatabase = {getUserByEmail};
            hashGenerator = {compareHash};
            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashGenerator as any,
                tokenGenerator as any
                );

            await userBusiness.login("astrodev@gmail.com", "maxixezinho");

            expect(getUserByEmail).toHaveBeenCalledWith("astrodev@gmail.com");
            expect(compareHash).toHaveBeenCalledWith("maxixezinho", "bananinha");
            expect(tokenGenerator.generate).toHaveReturnedWith("token");
            
        } catch (error) {
            
        }
    });

});
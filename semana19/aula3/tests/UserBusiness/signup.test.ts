import { UserBusiness } from "../../src/business/UserBusiness";
import { IdGenerator } from "../../src/services/idGenerator";
import { User, stringToUserRole } from "../../src/model/User";

describe.skip("Testando o signup na camada UserBusiness", () => {

    let userDatabase = {
        createUser: jest.fn((user: User)=>{})
    };
    let hashGenerator = {
        hash: jest.fn(() => "hash")
    };
    let idGenerator = {
        generate: jest.fn(() => "id")
    }

    let tokenGenerator = {
        generate: jest.fn(()=> "token")
    };

    test("Deve retornar erro ao receber um nome vazio", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            tokenGenerator as any
        );

        try {
            await userBusiness.signup("", "astrodev@labenu.com.br", "bananinha", "ADMIN");
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Deve retornar erro ao receber um email vazio", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            tokenGenerator as any
        );

        try {
            await userBusiness.signup("Astrodev", "", "bananinha", "ADMIN");
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Deve retornar erro ao receber uma senha vazia", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            tokenGenerator as any
        );

        try {
            await userBusiness.signup("Astrodev", "astrodev@labenu.com.br", "", "ADMIN");
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Deve retornar erro ao receber um role vazio", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            tokenGenerator as any
        );

        try {
            await userBusiness.signup("Astrodev", "astrodev@labenu.com.br", "bananinha", "");
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });


    test("Deve retornar erro 'Invalid email' para um email sem @", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            tokenGenerator as any
        );

        try {
            await userBusiness.signup("Astrodev", "astrodevlabenu.com.br", "bananinha", "ADMIN");
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Invalid email");
        }
    });

    test("Deve retornar erro 'Invalid password' para uma senha com menos de 6 caracteres", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            tokenGenerator as any
        );

        try {
            await userBusiness.signup("Astrodev", "astrodev@labenu.com.br", "banan", "ADMIN");
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Invalid password");
        }
    });

    test("Deve retornar 'Invalid user role em caso de role que não seja NORMAL ou ADMIN'", async () => {
        expect.assertions(2);
        try {

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashGenerator as any,
                tokenGenerator as any
            );

            await userBusiness.signup(
                "Astrodev",
                "astrodev@gmail.com",
                "123456",
                "superadmin"
            );
        } catch (err) {
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Invalid user role");
        }
    });

    test("Deve retornar token de acesso após criação de usuário", async () => {
        expect.assertions(3);
        try {

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashGenerator as any,
                tokenGenerator as any
            );

            await userBusiness.signup(
                "Astrodev",
                "astrodev@gmail.com",
                "123456",
                "ADMIN"
            );

            expect(hashGenerator.hash).toBeCalled();
            expect(userDatabase.createUser).toBeCalledWith(
                new User("id", "Astrodev", "astrodev@gmail.com", "hash", stringToUserRole("ADMIN"))
            );
            expect(tokenGenerator.generate).toHaveReturnedWith("token");

        } catch (err) {

        }
    });
});
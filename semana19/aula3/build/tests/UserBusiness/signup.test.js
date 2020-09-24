"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = require("../../src/business/UserBusiness");
const User_1 = require("../../src/model/User");
describe("Testando o signup na camada UserBusiness", () => {
    let userDatabase = {
        createUser: jest.fn((user) => { })
    };
    let hashGenerator = {
        hash: jest.fn(() => "hash")
    };
    let idGenerator = {
        generate: jest.fn(() => "id")
    };
    let tokenGenerator = {
        generate: jest.fn(() => "token")
    };
    test("Deve retornar erro ao receber um nome vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
        try {
            yield userBusiness.signup("", "astrodev@labenu.com.br", "bananinha", "ADMIN");
        }
        catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    }));
    test("Deve retornar erro ao receber um email vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
        try {
            yield userBusiness.signup("Astrodev", "", "bananinha", "ADMIN");
        }
        catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    }));
    test("Deve retornar erro ao receber uma senha vazia", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
        try {
            yield userBusiness.signup("Astrodev", "astrodev@labenu.com.br", "", "ADMIN");
        }
        catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    }));
    test("Deve retornar erro ao receber um role vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
        try {
            yield userBusiness.signup("Astrodev", "astrodev@labenu.com.br", "bananinha", "");
        }
        catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    }));
    test("Deve retornar erro 'Invalid email' para um email sem @", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
        try {
            yield userBusiness.signup("Astrodev", "astrodevlabenu.com.br", "bananinha", "ADMIN");
        }
        catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Invalid email");
        }
    }));
    test("Deve retornar erro 'Invalid password' para uma senha com menos de 6 caracteres", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
        try {
            yield userBusiness.signup("Astrodev", "astrodev@labenu.com.br", "banan", "ADMIN");
        }
        catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Invalid password");
        }
    }));
    test("Deve retornar 'Invalid user role em caso de role que não seja NORMAL ou ADMIN'", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
            yield userBusiness.signup("Astrodev", "astrodev@gmail.com", "123456", "superadmin");
        }
        catch (err) {
            expect(err.errorCode).toBe(422);
            expect(err.message).toBe("Invalid user role");
        }
    }));
    test("Deve retornar token de acesso após criação de usuário", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
            yield userBusiness.signup("Astrodev", "astrodev@gmail.com", "123456", "ADMIN");
            expect(hashGenerator.hash).toBeCalled();
            expect(userDatabase.createUser).toBeCalledWith(new User_1.User("id", "Astrodev", "astrodev@gmail.com", "hash", User_1.stringToUserRole("ADMIN")));
            expect(tokenGenerator.generate).toHaveReturnedWith("token");
        }
        catch (err) {
        }
    }));
});

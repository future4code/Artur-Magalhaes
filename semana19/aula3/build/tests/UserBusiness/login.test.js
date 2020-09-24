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
describe("Testando o login na camada de Business", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let idGenerator = {};
    let tokenGenerator = {
        generate: jest.fn(() => "token")
    };
    test("Deve retornar erro quando o e-mail está vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
            yield userBusiness.login("", "bananinha");
        }
        catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    }));
    test("Deve retornar erro quando a senha está vazia", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
            yield userBusiness.login("astrodev@gmail.com", "");
        }
        catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    }));
    test("Deve retornar erro quando o usuário não é encontrado", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        let getUserByEmail = jest.fn((email) => { return undefined; });
        try {
            userDatabase = { getUserByEmail };
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
            yield userBusiness.login("notFound@gmail.com", "bananinha");
        }
        catch (error) {
            expect(error.errorCode).toBe(404);
            expect(error.message).toEqual("User not found");
            expect(getUserByEmail).toHaveBeenCalledWith("notFound@gmail.com");
        }
    }));
    test("Deve retornar erro quando o usuário passou a senha incorreta", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(4);
        let getUserByEmail = jest.fn((email) => {
            return new User_1.User("id", "Astrodev", "astrodev@gmail.com", "bananinha", User_1.UserRole.ADMIN);
        });
        let compareHash = jest.fn((password, userPassword) => false);
        try {
            userDatabase = { getUserByEmail };
            hashGenerator = { compareHash };
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
            yield userBusiness.login("astrodev@gmail.com", "maxixezinho");
        }
        catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Invalid password");
            expect(getUserByEmail).toHaveBeenCalledWith("astrodev@gmail.com");
            expect(compareHash).toHaveBeenCalledWith("maxixezinho", "bananinha");
        }
    }));
    test("Deve retornar token quando todos os dados estiverem corretos", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        let getUserByEmail = jest.fn((email) => {
            return new User_1.User("id", "Astrodev", "astrodev@gmail.com", "bananinha", User_1.UserRole.ADMIN);
        });
        let compareHash = jest.fn((password, userPassword) => true);
        try {
            userDatabase = { getUserByEmail };
            hashGenerator = { compareHash };
            const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, idGenerator, hashGenerator, tokenGenerator);
            yield userBusiness.login("astrodev@gmail.com", "maxixezinho");
            expect(getUserByEmail).toHaveBeenCalledWith("astrodev@gmail.com");
            expect(compareHash).toHaveBeenCalledWith("maxixezinho", "bananinha");
            expect(tokenGenerator.generate).toHaveReturnedWith("token");
        }
        catch (error) {
        }
    }));
});

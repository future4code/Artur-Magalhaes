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
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
const User_1 = require("../model/User");
class UserDatabase extends BaseDatabase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.tableName = "AulaTestesUsers";
    }
    toModel(dbModel) {
        return (dbModel &&
            new User_1.User(dbModel.id, dbModel.name, dbModel.email, dbModel.password, dbModel.role));
    }
    createUser(user) {
        const _super = Object.create(null, {
            getConnection: { get: () => super.getConnection }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.getConnection.call(this).raw(`
        INSERT INTO ${this.tableName} (id, name, email, password, role)
        VALUES (
          '${user.getId()}', 
          '${user.getName()}', 
          '${user.getEmail()}',
          '${user.getPassword()}', 
          '${user.getRole()}'
        )`);
        });
    }
    getUserByEmail(email) {
        const _super = Object.create(null, {
            getConnection: { get: () => super.getConnection }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.getConnection.call(this).raw(`
      SELECT * from ${this.tableName} WHERE email = '${email}'
      `);
            return this.toModel(result[0][0]);
        });
    }
    getUserById(id) {
        const _super = Object.create(null, {
            getConnection: { get: () => super.getConnection }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.getConnection.call(this).raw(`
      SELECT * from ${this.tableName} WHERE id = '${id}'
      `);
            return this.toModel(result[0][0]);
        });
    }
    getAllUsers() {
        const _super = Object.create(null, {
            getConnection: { get: () => super.getConnection }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.getConnection.call(this).raw(`
      SELECT * from ${this.tableName}
    `);
            return result[0].map((res) => {
                return this.toModel(res);
            });
        });
    }
}
exports.UserDatabase = UserDatabase;

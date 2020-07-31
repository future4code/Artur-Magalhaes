"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
const moment_1 = __importDefault(require("moment"));
const fs = __importStar(require("fs"));
const write_database_1 = require("./write_database");
const read_database_1 = __importDefault(require("./read_database"));
function createAccount(name, cpf, dateOfBirth, balance, history) {
    const years = moment_1.default().diff(dateOfBirth, "years");
    if (years >= 18) {
        const data = JSON.parse(fs.readFileSync("./data.json").toString());
        const dataUser = {
            name,
            cpf,
            dateOfBirth,
            balance,
            history,
        };
        const aux = data.filter(item => item.cpf === cpf);
        if (aux.length === 0) {
            data.push(dataUser);
            console.log(data);
            write_database_1.subscribeDataBase(JSON.stringify(data));
            read_database_1.default();
        }
    }
    else {
        console.error("Usuário precisa ter 18 anos ou mais");
    }
}
exports.createAccount = createAccount;

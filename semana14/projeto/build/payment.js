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
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
const write_database_1 = require("./write_database");
function payment(cpf, value, description, date) {
    const dataPayment = { value, description, date };
    let balance = 0;
    const data = JSON.parse(fs.readFileSync("./data.json").toString());
    data.forEach(item => {
        if (item.cpf === cpf) {
            balance = item.balance;
            if (balance >= value) {
                item.balance -= value;
                item.history.push(JSON.stringify(dataPayment));
            }
            else {
                console.error("Não foi possível pagar a conta");
            }
        }
    });
    write_database_1.subscribeDataBase(JSON.stringify(data));
    console.log(data);
}
payment("11111111111", 20, "Pagando a conta", moment_1.default());

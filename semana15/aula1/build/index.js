"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserAccount_1 = __importDefault(require("./UserAccount"));
const Bank_1 = __importDefault(require("./Bank"));
const File_1 = require("./File");
let transactions = [];
let arrayUsers = [];
const arquivo = JSON.parse(File_1.readFile());
arrayUsers = arquivo;
if (Number(process.argv[3]) > 18) {
    const newAccount = new UserAccount_1.default(process.argv[2], Number(process.argv[3]), process.argv[4], 10, transactions);
    arrayUsers.push(newAccount);
    File_1.writeFile(JSON.stringify(arrayUsers));
    console.log(`Saldo é: ${newAccount.getBalance(process.argv[4], process.argv[2])}`);
    newAccount.setBalance(process.argv[4], process.argv[2], 25);
    console.log(`Saldo é: ${newAccount.getBalance(process.argv[4], process.argv[2])}`);
    arrayUsers.forEach((item, index) => {
        if (item.cpf === newAccount.getCPF()) {
            arrayUsers.splice(index, 1);
        }
    });
    arrayUsers.push(newAccount);
    File_1.writeFile(JSON.stringify(arrayUsers));
    console.log(arrayUsers);
    const bank = new Bank_1.default();
    bank.getAccounts();
}
else {
    console.log("Usuário precisa ser maior de 18 anos");
}

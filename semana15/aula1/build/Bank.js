"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = require("./File");
class Bank {
    constructor() {
        this.accounts = [];
        this.getAccounts = () => {
            console.log(File_1.readFile());
        };
    }
}
exports.default = Bank;

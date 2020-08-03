"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(_name, _age, _cpf, _balance, _transactions) {
        this.balance = 0;
        this.getBalance = (_cpf, _name) => {
            if (this.cpf === _cpf && this.name === _name) {
                return this.balance;
            }
            return 0;
        };
        this.getCPF = () => this.cpf;
        this.getAge = () => this.age;
        this.setBalance = (_cpf, _name, add) => {
            if (this.cpf === _cpf && this.name === _name) {
                this.balance += add;
            }
        };
        this.name = _name;
        this.age = _age;
        this.cpf = _cpf;
        this.balance = _balance;
        this.transactions = _transactions;
    }
}
exports.default = UserAccount;

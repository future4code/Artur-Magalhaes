"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_account_1 = require("./create_account");
const add_balance_1 = require("./add_balance");
const moment_1 = __importDefault(require("moment"));
let initialBuys = [];
create_account_1.createAccount("Artur", "11111111111", moment_1.default("22/10/1995", "DD/MM/YYYY"), 0, initialBuys);
add_balance_1.add_balance("Artur", "11111111111", 25);

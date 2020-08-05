"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = exports.readFile = void 0;
const fs_1 = __importDefault(require("fs"));
exports.readFile = () => {
    return fs_1.default.readFileSync('data.json').toString();
};
exports.writeFile = (data) => {
    fs_1.default.writeFileSync('data.json', data);
};

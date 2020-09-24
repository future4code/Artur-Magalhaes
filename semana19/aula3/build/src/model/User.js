"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = exports.stringToUserRole = exports.User = void 0;
const InvalidParameterError_1 = require("../errors/InvalidParameterError");
class User {
    constructor(id, name, email, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
}
exports.User = User;
exports.stringToUserRole = (input) => {
    switch (input) {
        case "NORMAL":
            return UserRole.NORMAL;
        case "ADMIN":
            return UserRole.ADMIN;
        default:
            throw new InvalidParameterError_1.InvalidParameterError("Invalid user role");
    }
};
var UserRole;
(function (UserRole) {
    UserRole["NORMAL"] = "NORMAL";
    UserRole["ADMIN"] = "ADMIN";
})(UserRole = exports.UserRole || (exports.UserRole = {}));

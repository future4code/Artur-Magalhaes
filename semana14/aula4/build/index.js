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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const moment_1 = __importDefault(require("moment"));
const baseUrl = "ttps://us-central1-labenu-apis.cloudfunctions.net/labenews";
let listUsers = [];
function getSubscribers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
        console.log(users.data);
        return users.data;
    });
}
getSubscribers();
const getSubscribers2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    console.log(users.data);
    listUsers.push(users.data);
    return users.data;
});
const getSubscribers3 = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return users.data.map((user) => {
        console.log(user);
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    });
});
function createNews(title, content) {
    const body = {
        title,
        content,
        date: moment_1.default.now()
    };
    axios_1.default.put(`${baseUrl}/news`, body)
        .then(() => console.log(body.title))
        .catch(error => console.error(error));
}
createNews("Mello no backend", "Bem vindo");
const sendNotification = (users, message) => __awaiter(void 0, void 0, void 0, function* () {
    for (const user of users) {
        axios_1.default.post(`${baseUrl}/notifications/send`, {
            subscriberId: user.id,
            message: message,
        });
        console.log(user.id);
    }
    console.log("Notificação enviada");
});
sendNotification(listUsers, "Bem vindo");
const sendNotification2 = (users, message) => __awaiter(void 0, void 0, void 0, function* () {
    const promiseArray = [];
    for (const user of users) {
        promiseArray.push(axios_1.default.post(`${baseUrl}/notifications/send`, {
            subscriberId: user.id,
            message: message,
        }));
    }
    yield Promise.all(promiseArray);
    console.log("Notificação enviada");
});
sendNotification2(listUsers, "Bem vindo");
function createUser(name, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = {
            name,
            email
        };
        yield axios_1.default.put(`${baseUrl}/subscribers`, body);
    });
}
createUser('Artur', 'artur@gmail.com');
function createNews2(title, content) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = {
            title,
            content,
            date: moment_1.default.now()
        };
        yield getSubscribers2();
        console.log(listUsers);
        yield axios_1.default.put(`${baseUrl}/news`, body)
            .then(() => {
            sendNotification2(listUsers, "Nova notícia");
            console.log(body.title);
        })
            .catch(error => console.error(error));
    });
}
createNews2("Mello no backend", "Bem vindo");
const notifications = () => __awaiter(void 0, void 0, void 0, function* () {
    const promiseArray = [];
    const users = yield getSubscribers();
    for (const user of users) {
        promiseArray.push(axios_1.default.get(`${baseUrl}/subscribers/${user.id}/notifications/all`));
    }
    const result = yield Promise.all(promiseArray);
    return result.map(res => {
        res.data;
    });
});
notifications();

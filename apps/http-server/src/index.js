"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@repo/db/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("world");
});
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    client_1.client.kernel.create({
        //@ts-ignore
        data: {
            username: username,
            password: password
        }
    });
    res.send("Signed up");
});
app.listen(3002);

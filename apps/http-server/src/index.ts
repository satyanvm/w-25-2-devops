import express from "express";
import { client } from "@repo/db/client";
const app = express();

app.get("/", (req,res) => {
    res.send("world");
})

app.post("/signup", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    client.user.create({
        data: {
            username: username,
            password: password
        }
    })
    
    res.send("Signed up")
 })
app.listen(3002)

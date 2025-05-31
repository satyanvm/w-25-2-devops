import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
    port:3001
});

server.on("connection",  (socket) => {
   client.users.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    }).then((response: any) => {
   console.log(response);
    socket.send("You are connected to the server");
    })
 

    
} )



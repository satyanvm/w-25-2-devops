import { WebSocketServer } from "ws";
import { PrismaClient } from '@prisma/client'
export const client = new PrismaClient()

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



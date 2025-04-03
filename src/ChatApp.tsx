import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
const socket=io("http://localhost:3001");

const ChatApp=()=>{
    const inputRef=useRef<HTMLInputElement|null>(null);
    const [messages,setMessages]=useState<string[]>([]);

    useEffect(()=>{//mount
        socket.on("connect",()=>{
            console.log("Connected to Server...")
            //socket.emit("user-message","Hello");

        })
        socket.on("msg",(data)=>{
            //console.log("Message:",data)
            //setMessages([...messages,data])
            setMessages((prevState)=>[...prevState,data]);

        })

    },[])
    const sendHandler=()=>{
        socket.emit("user-message",inputRef.current?.value);


    }
    return (
        <>
        <div>Chat App</div>
        <div>
        <input className="border" type="text" ref={inputRef}/>
        <button onClick={sendHandler}>Send</button>

        </div>
        <div>
            {
                messages.map((item)=>{
                    return (
                        <div>{item}</div>
                    )
                })
            }

        </div>
        </>
    )
}
export default ChatApp;
/*
import { Server } from "socket.io";
const io=new Server(3001,{
    cors:{
        origin:"*"
    }
});
io.on("connection",(socket)=>{
    console.log("Connection from client...",socket.id);
    socket.on("user-message",(data)=>{
        console.log("Message:",data);
        io.emit("msg",data);// to all
        //socket.emit("msg",data); to self
        //socket.broadcast.emit("msg",data); to all except me


    })
})

*/
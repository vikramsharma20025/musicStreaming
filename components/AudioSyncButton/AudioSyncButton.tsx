'use client';
import { socket } from "@/app/socket";
import { useEffect, useState } from "react";
import SyncIcon from '@mui/icons-material/Sync';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import LeakRemoveIcon from '@mui/icons-material/LeakRemove';

const AudioSyncButton = () => {
    const [isConnected,setIsConnected] = useState(false);
    const [transport,setTransport] = useState("N/A");
    const [timeee,setTimeee] = useState("hey we are syncing the time");

    function syncit(){
        socket.emit("sync",timeee);
    }
    useEffect(()=>{
        if(socket.connected){
            onConnect();
        }
        function onConnect(){
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);
            socket.io.engine.on("upgrade",(transport)=>{
                setTransport(transport.name);
            });
        }
        function onDisconnect(){
            setIsConnected(false);
            setTransport("N/A");
        }
        socket.on("connect",onConnect);
        socket.on("disconnect",onDisconnect);
        return ()=>{
            socket.off("connect",onConnect);
            socket.off("disconnect",onDisconnect);
        };
    },[]);

    return (
        <div>
            <p>Status: {isConnected?"connected":"disconnected"}</p>
            <p>Transport: {transport}</p>
            <button onClick={syncit}><SyncIcon /></button>
            {isConnected?<LeakAddIcon />:<LeakRemoveIcon />}
        </div>
    )
}

export default AudioSyncButton;

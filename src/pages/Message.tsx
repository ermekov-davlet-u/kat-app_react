import React, { useEffect, useState } from 'react';
import io from "socket.io-client"

const Home: React.FC = () => {

  useEffect(() => {
    
    const socket = io("http://localhost:5000/")
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.emit("message", { mess: "asdasd" })
    socket.on("message", (payload: {
      mess: string
    }, idStud: number) => {
      console.log(payload, idStud);
    })
    
  }, []);

  

  return (
    <>
      davlet
    </>
  );
};

export default Home;
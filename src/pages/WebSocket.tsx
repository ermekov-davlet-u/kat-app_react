import React, { useState, useCallback, useEffect, ChangeEvent } from 'react';
import classes from "./WebSocket.module.css"
import { io } from "socket.io-client";
import { ErrorCallback } from 'typescript';

export const WebSocketDemo = () => {

  const [messageText, setMessageText] = useState<string>("")

  const socket = io("http://localhost:5000/", {
    reconnectionDelayMax: 10000,
    auth: {
      token: "123"
    },
    query: {
      "my-key": "my-value"
    }
  })



  async function sendMessage(){

    socket.emit("createKat", { a: "b", c: [], messageText});

    socket.on("message-kat", (type, data) => {
      console.log(type, data);
      
    })
  }

  useEffect(() => {
    
    try {
      // socket.open(() => {})
    } catch (error: any) {
      console.log(error.message);
      
    }

  }, [])

  return (
    <main className={classes.main_socket} >
        <div className={classes.socket}>
          <div className={classes.header}>
            <h2 className={classes.title}>
              Cosmos Diamonds
            </h2>
            <div className={classes.link}>
              <a href="#" className={classes.link_btn}>Переходи по ссылке</a>
            </div>
          </div>
          <div className={classes.content}>
            <h2 className={classes.content_title}>
              Opening soon
            </h2>
            <p className={classes.content_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <input type="text" className={classes.content_inp} value={messageText} onInput={(e: ChangeEvent<HTMLInputElement>) => {
              setMessageText(e.target.value)
            }} />
            <button className={classes.btn} onClick={() => {
              sendMessage()
            }}>Отправить</button>
          </div>
        </div>
    </main>
  );
};
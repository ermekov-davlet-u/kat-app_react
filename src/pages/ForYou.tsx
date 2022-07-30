import React, { useState, useRef, useEffect, useCallback } from "react";

function ForYou() {

    const [isPaused, setIsPaused] = useState(false);
    const [data, setData] = useState<any>();
    const [status, setStatus] = useState("");
    const ws = useRef<any>();

    useEffect(() => {
        if (!isPaused && ws) {
            ws.current = new WebSocket("ws://localhost:5000/"); // создаем ws соединение
            ws.current.onopen = () => setStatus("Соединение открыто");  // callback на ивент открытия соединения
            ws.current.onclose = () => setStatus("Соединение закрыто"); // callback на ивент закрытия соединения

            gettingData();
        }

        return () => ws.current.close(); // кода меняется isPaused - соединение закрывается
    }, [ws, isPaused]);

    const gettingData = useCallback(() => {
        if (!ws.current) return;

        ws.current.onmessage = (e: any) => {                //подписка на получение данных по вебсокету
            if (isPaused) return;
            const message = JSON.parse(e.data);
            setData(message);
        };
    }, [isPaused]);

    return ( 
        <>
            <>
            {!!data &&
                <div>
                    <div>
                        <h2>{status}</h2>
                        <p>{`connection ID: ${data?.connectionID}`}</p>
                        <p>{`event: ${data?.event}`}</p>
                        <p>{`status: ${data?.status}`}</p>
                        <p>{`version: ${data?.version}`}</p>
                    </div>
                    <button onClick={() => {
                        ws.current.close();
                        setIsPaused(!isPaused)
                    }}>{!isPaused ? 'Остановить соединение' : 'Открыть соединение' }</button>
                </div>
            }
        </>
        </>
     );
}

export default ForYou;
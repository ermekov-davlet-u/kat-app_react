import React, { useState } from 'react';
import classes from './Filter.module.scss'
import Selector from './../Select/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Filter() {
    const [startDate, setStartDate] = useState(new Date());
    const [port, setPort] = useState()
    const [status, setStatus] = useState()


    return ( 
        <div className={classes.filter}>
            <h2 className={classes.title}>
                Все грузы
            </h2>
            <div className={classes.container}>
                <Selector value={port} setValue = {setPort}  title="Порт назначения" />
                <Selector value={status} setValue = {setStatus} title="Статус" />
                <div className={classes.date}>
                    <p style={{ marginBottom: '10px', color: '#828282', fontSize: 12, textAlign: 'left', display: "flex", alignItems: 'center'}} >Дата поступления в порт</p>
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                </div>
                <button className={classes.btn}>Сбросить</button>
                <button className={classes.btn} onClick={() => {
                    console.log(port,
                        status);
                    
                }}>Применить</button>
            </div>
        </div>
     );
}

export default Filter;
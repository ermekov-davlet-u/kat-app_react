import React, { useState } from 'react';
import classes from './Filter.module.scss'
import Selector from './../Select/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { selectType } from './../../../store/models';
import { BsCalendarDate } from 'react-icons/bs';

function Filter() {
    const [date, setDate] = useState(new Date());
    const [port, setPort] = useState<selectType>({
        label: "",
            value: 0
    })
    const [status, setStatus] = useState<selectType>({
        label: "",
            value: 0
    })

    function reset() {
        setPort({
            label: "",
            value: 0
        })
        setStatus({
            label: "",
            value: 0
        })
        setDate(new Date())
    }

    return ( 
        <div className={classes.filter}>
            <h2 className={classes.title}>
                Все грузы
            </h2>
            <div className={classes.container}>
                <Selector value={port} setValue = { (state) =>  {setPort(state)}}  title="Порт назначения" />
                <Selector value={status} setValue = { (state) =>  {setStatus(state)}} title="Статус" />
                <div className={classes.date} >
                    <p style={{ marginBottom: '10px', color: '#828282', fontSize: 12, textAlign: 'left', display: "flex", alignItems: 'center'}} >Дата поступления в порт</p>
                    <DatePicker selected={date} onChange={(date:Date) => setDate(date)} />
                    <BsCalendarDate className={classes.date_Icon} />
                </div>
                <div className={classes.btns}>
                    <button className={classes.btn} onClick={reset} > Сбросить</button>
                    <button className={classes.btn} onClick={() => {
                        console.log(port,
                            status);
                        
                    }}>Применить</button>
                </div>
            </div>
        </div>
     );
}

export default Filter;
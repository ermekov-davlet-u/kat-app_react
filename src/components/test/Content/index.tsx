import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import "./index.scss"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import { useRef } from 'react';
import ContentElem from './ContentElem';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { observer } from 'mobx-react-lite';
import { cargo } from './../../../store/cargo';

function Content() {

    const [count, setCount] = useState<number>(20)
    const  [pages, setPages] = useState<{
        maxPages: number
        currentPage: number
    }>({
        maxPages: 1,
        currentPage: 1,
    })

    return ( 
        <div>
            <div className="container">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-0">
                                <input type="checkbox" onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    cargo.setDone(e.target.checked)
                                }}/>
                            </div>
                            <div className="col col-1" >Номер груза</div>
                            <div className="col col-1">Тип</div>
                            <div className="col col-1">Закрепленный заказ </div>
                            <div className="col col-1">Грузоотправитель</div>
                            <div className="col col-3">Номер приемного акта</div>
                            <div className="col col-2">Номер транспортной/ЖД накладной</div>
                            <div className="col col-2">Дата поступления в порт</div>
                            <div className="col col-0">
                                <MdOutlineKeyboardArrowDown />
                            </div>
                        </li>
                        {
                            cargo.cargo.map((item, i) => {
                                return( 
                                    <ContentElem item={item} />
                                )
                            })
                        }
                    </ul>
                    <div className="page">
                        <div className="show-page">
                            <p className="show-page_title">
                                Показывать по:
                            </p>
                            <div className="show-page_pages">
                                <button className={count == 20 ? "page_btn page_btn_active": "page_btn"}  onClick={() => setCount(20)} >20</button>
                                <button className={count == 30 ? "page_btn page_btn_active": "page_btn"}  onClick={() => setCount(30)} >30</button>
                                <button className={count == 50 ? "page_btn page_btn_active": "page_btn"}  onClick={() => setCount(50)} >50</button>
                            </div>
                        </div>
                        <div className="show-page">
                            <button className="pages_btn">
                                <IoIosArrowBack />
                            </button>
                            <button className="pages_num">
                                1
                            </button>
                            <button className="pages_num">
                                2
                            </button>
                            <button className="pages_num">
                                3
                            </button>
                            <button className="pages_num">
                                4
                            </button>
                            <button className="pages_btn">
                                <IoIosArrowForward />
                            </button>
                        </div>
                        
                    </div>
                </div>
        </div>
     );
}

export default observer(Content);
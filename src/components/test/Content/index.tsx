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
        count: number
    }>({
        maxPages: 2,
        currentPage: 1,
        count: 2
    })

    return ( 
        <div>
            <div className="container">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-0">
                                <input type="checkbox" onChange={async(e: ChangeEvent<HTMLInputElement>) => {
                            const cargos = await cargo.cargo.map(item => {
                                item.done = !!e.target.checked
                                return item
                            })

                            cargo.newCargos(cargos)

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
                            cargo.cargo.slice((pages.currentPage * count) - count, (pages.currentPage * count)).map((item, i) => {

                                
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
                            {
                                [1,2,3,4,5,6].map((item, i) => {
                                    if(item == pages.currentPage){
                                        return (
                                            <button className="pages_num pages_num_active" onClick={ () => {
                                                setPages(state => {
                                                    return { ...state, currentPage: i }
                                                })
                                            } }>
                                                {
                                                    ++i
                                                }
                                            </button>
                                        )
                                    }
                                    return (
                                        <button className="pages_num" onClick={ () => {
                                            setPages(state => {
                                                return { ...state, currentPage: i }
                                            })
                                        } }>
                                            {
                                                ++i
                                            }
                                        </button>
                                    )
                                })
                            }
                            
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
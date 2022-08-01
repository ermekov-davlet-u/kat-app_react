import React, { MouseEventHandler } from 'react';
import "./index.scss"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import { useRef } from 'react';
import ContentElem from './ContentElem';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Content() {

    


    return ( 
        <div>
            <div className="container">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-0">
                                <input type="checkbox" />
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
                            [1,2,3,3,4,4,5,6,6,6].map((item, i) => {
                                return( 
                                    <ContentElem />
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
                                <button className="page_btn">20</button>
                                <button className="page_btn">30</button>
                                <button className="page_btn">50</button>
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

export default Content;
import React from 'react';
import "./index.scss"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

function Content() {
    return ( 
        <div>
            <div className="container">
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-0">
                            <input type="checkbox" />
                        </div>
                        <div className="col col-1">Номер груза</div>
                        <div className="col col-1">Тип</div>
                        <div className="col col-1">Закрепленный заказ </div>
                        <div className="col col-1">Грузоотправитель</div>
                        <div className="col col-1">Номер приемного акта</div>
                        <div className="col col-2">Номер транспортной/ЖД накладной</div>
                        <div className="col col-2">Дата поступления в порт</div>
                        <div className="col col-0">
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </li>
                    <li className="table-row">
                        <div className="col col-0">
                            <input type="checkbox" />
                        </div>
                        <div className="col col-1" data-label="Job Id">42235</div>
                        <div className="col col-1" data-label="Customer Name">John Doe</div>
                        <div className="col col-1" data-label="Amount">$350</div>
                        <div className="col col-1" data-label="Payment Status">Pending</div>
                        <div className="col col-1" data-label="Payment Status">Pending</div>
                        <div className="col col-2" data-label="Payment Status">Pending</div>
                        <div className="col col-2" data-label="Payment Status">Pending</div>
                        <div className="col col-0">
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </li>
                    <li className="table-row">
                        <div className="col col-0">
                            <input type="checkbox" />
                        </div>
                        <div className="col col-1" data-label="Job Id">42442</div>
                        <div className="col col-1" data-label="Customer Name">Jennifer Smith</div>
                        <div className="col col-1" data-label="Amount">$220</div>
                        <div className="col col-1" data-label="Payment Status">Pending</div>
                        <div className="col col-1" data-label="Payment Status">Pending</div>
                        <div className="col col-2" data-label="Payment Status">Pending</div>
                        <div className="col col-2" data-label="Payment Status">Pending</div>
                        <div className="col col-0">
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </li>
                </ul>
                </div>
        </div>
     );
}

export default Content;
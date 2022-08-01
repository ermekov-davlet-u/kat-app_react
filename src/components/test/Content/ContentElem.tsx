
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState, ChangeEvent } from 'react';
import "./index.scss"
import { useRef } from 'react';
import MoreInfo from './Moreinfo';
import { CargoType } from '../../../store/models';
import { cargo } from './../../../store/cargo';


function ContentElem( { item }: { item: CargoType } ) {
    const activeElem = useRef<any>(null)
    
    function removeAllActive() {
        const elem = document.querySelectorAll(".table-row")
        elem.forEach((item) => {
            item.classList.remove("active")
        })
    }

    const hundleHeight = async() => {
        const a = activeElem.current.classList.contains("active")
        await removeAllActive()
        if(!a){
            activeElem.current.classList.toggle("active")
        }
    }

    return ( 
        <>
            <li className={ "table-row" } ref={activeElem}>
                <div className="height" onClick={hundleHeight} >
                    <div className="col col-0">
                        <input type="checkbox" onClick={(e) => {
                            e.stopPropagation()
                        }} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            cargo.setDone(!!e.target.checked, item.id )
                        }}/>
                    </div>
                    <div className="col col-1" data-label="Job Id"> {
                        item.id
                    } </div>
                    <div className="col col-1" data-label="Customer Name">{
                        item.typeContainer
                    }</div>
                    <div className="col col-1" data-label="Amount">{
                        item.linkOrder
                    }</div>
                    <div className="col col-1" data-label="Payment Status">
                        {
                            item.delivery
                        }
                    </div>
                    <div className="col col-3" data-label="Payment Status">
                        {
                            item.numberAct
                        }
                    </div>
                    <div className="col col-2" data-label="Payment Status">
                        {
                            item.numberJD
                        }
                    </div>
                    <div className="col col-2" data-label="Payment Status">
                        {
                            item.date?.toLocaleDateString()
                        }
                    </div>
                    <div className="col col-0">
                        <MdOutlineKeyboardArrowDown />
                    </div>                                        
                </div>
                <MoreInfo { ...item } />
            </li>
        </>
     );
}

export default ContentElem;
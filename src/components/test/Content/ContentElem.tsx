
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import "./index.scss"
import { useRef } from 'react';
import MoreInfo from './Moreinfo';


function ContentElem() {

    const [fullyShow, setFully] = useState<boolean>(false)
    const activeElem = useRef<any>(null)
    
    function removeAllActive() {
        const elem = document.querySelectorAll(".table-row")
        elem.forEach((item) => {
            item.classList.remove("active")
        })
    }

    const hundleHeight = async() => {
        
        await removeAllActive()
        if(activeElem.current){
            activeElem.current.classList.toggle("active")
        }
    }

    return ( 
        <>
            <li className={ "table-row" } ref={activeElem}  onClick={hundleHeight}>
                                    <div className="height">
                                        <div className="col col-0">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="col col-1" data-label="Job Id">42235</div>
                                        <div className="col col-1" data-label="Customer Name">John Doe</div>
                                        <div className="col col-1" data-label="Amount">$350</div>
                                        <div className="col col-1" data-label="Payment Status">Pending</div>
                                        <div className="col col-3" data-label="Payment Status">Pending</div>
                                        <div className="col col-2" data-label="Payment Status">Pending</div>
                                        <div className="col col-2" data-label="Payment Status">Pending</div>
                                        <div className="col col-0">
                                            <MdOutlineKeyboardArrowDown />
                                        </div>                                        
                                    </div>
                                    <MoreInfo />
                                </li>
        </>
     );
}

export default ContentElem;
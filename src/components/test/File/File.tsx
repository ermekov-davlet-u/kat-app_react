import classes from "./File.module.scss"
import { BsDownload } from "react-icons/bs"
import { BiX } from "react-icons/bi"


function File() {
    return ( 
        <div className={classes.file}>
            <div className={classes.file_left} >
                <div className={classes.file_name}>
                    Накладная_для_Умки (1).doc
                </div>
                <div className={classes.file_date}>
                    от 24.10.2021
                </div>
                <div className={classes.file_order}>
                    Заказ №4329
                </div>
            </div>
            <div className={classes.file_btns}>
                <button className={classes.file_btn}>
                    <BsDownload />
                </button>
                <button className={classes.file_btn}>
                    <BiX />
                </button>
            </div>
        </div>
     );
}

export default File;
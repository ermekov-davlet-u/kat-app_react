import "./navbar.scss"
import React, { useState } from "react"
import {FiMenu} from "react-icons/fi"
import { Link } from "react-router-dom";

function Navbar() {

    const [mobileShow, setMobileShow] = useState<boolean>(false)

    function hundleMenu(){
        setMobileShow(state => !state)
    }

    return ( 
        <>
            <div className={"navbar " + String(mobileShow? "show" : "close") }>
                <div className={"navbar_container "}>
                    <div className="navbar_btn_wrap">
                        <FiMenu className="navbar_btn"  onTouchStart={hundleMenu}/>
                    </div>
                    <nav className="menu">
                        <ul className="menu_ul">
                            <li className="menu_li"><Link className="menu_link" to={"/"} > Главная </Link> </li>
                            <li className="menu_li"><Link className="menu_link" to={"/projects"} > Проекты компании </Link> </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
     );
}

export default Navbar;
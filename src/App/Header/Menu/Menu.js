import React from "react"
import { Link } from "react-router-dom"


const Menu = () => {
    return (
        <>
            <div className="flat-nav-menu">
                <div className="flat-nav-menu-title">category</div>
                <ul className="flat-menu">
                    <li className="flat-nav-menu"><Link to="/reality">Reality</Link></li>
                    <li className="flat-nav-menu"><Link to="/living">Living</Link></li>
                    <li className="flat-nav-menu"><Link to="/education">EduCation</Link></li>
                    <li className="flat-nav-menu"><Link to="/entertainment">Entertainment</Link></li>
                    <li className="flat-nav-menu"><Link to="/mobility">Mobility</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Menu
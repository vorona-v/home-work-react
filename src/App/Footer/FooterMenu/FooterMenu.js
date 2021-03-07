import React from "react"
import { Link } from "react-router-dom"


const FooterMenu = () => {
    return (
        <>
            <div className="flat-footer-menu-wrap">
                <div className="flat-footer-menu-title">category</div>
                <ul>
                <li className="flat-nav-menu"><Link to="/reality">Reality</Link></li>
                    <li className="flat-nav-menu"><Link to="/living">Living</Link></li>
                    <li className="flat-nav-menu"><Link to="/eduCation">EduCation</Link></li>
                    <li className="flat-nav-menu"><Link to="/entertainment">Entertainment</Link></li>
                    <li className="flat-nav-menu"><Link to="/mobility">Mobility</Link></li>
                </ul>
            </div>
        </>
    )
}

export default FooterMenu
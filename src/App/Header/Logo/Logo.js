import React from "react"
import { Link } from "react-router-dom"
import logo from "../../../common/images/logo.jpg";
import logoMob from "../../../common/images/logo-mob.jpg";


const Logo = () => {
    return (
        <>
            <div className="flat-menu-logo">
                <Link className="flat-decktop" to="/"><img src={logo} alt="" /></Link>
                <Link className="flat-mobile" to="/"><img src={logoMob} alt="" /></Link>
            </div>
        </>
    )
}

export default Logo
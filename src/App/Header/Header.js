import React from "react"
import { Link } from "react-router-dom"
import logo from "../../common/images/logo.jpg";
import logoMob from "../../common/images/logo-mob.jpg";

const Header = () => {
    return (
        <header className="flat-header-wrap">
            <div className="flat-header-menu">
                <div className="container">
                    <div className="flat-menu-row">
                        <div className="flat-menu-logo">
                            <Link className="flat-decktop" to="/"><img src={logo} alt="" /></Link>
                            <Link className="flat-mobile" to="/"><img src={logoMob} alt="" /></Link>
                        </div>
                        <div className="flat-nav-menu">
                            <div className="flat-nav-menu-title">category</div>
                            <ul className="flat-menu">
                                <li className="flat-nav-menu"><Link to="/reality">Reality</Link></li>
                                <li className="flat-nav-menu"><Link to="/living">Living</Link></li>
                                <li className="flat-nav-menu"><Link to="/eduCation">EduCation</Link></li>
                                <li className="flat-nav-menu"><Link to="/entertainment">Entertainment</Link></li>
                                <li className="flat-nav-menu"><Link to="/mobility">Mobility</Link></li>
                            </ul>
                        </div>
                        <div className="flat-quick-btn">
                            <div className="flat-search-form">
                                <form className="search">
                                    <button className="search-button search-button-submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="flat-account-wrap"><button className="flat-login-btn"><i className="fas fa-user"></i>Login</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
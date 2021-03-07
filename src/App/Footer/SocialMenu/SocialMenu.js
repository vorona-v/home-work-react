import React from "react"
import { Link } from "react-router-dom"

const SocialMenu = () => {
    return (
        <>
            <div className="flat-footer-social-wrap">
                <div className="flat-footer-menu-title">Follow us</div>
                <ul>
                    <li className="flat-nav-menu"><Link to="/" className="fab fa-facebook-square"></Link></li>
                    <li className="flat-nav-menu"><Link to="/" className="fab fa-twitter-square"></Link></li>
                    <li className="flat-nav-menu"><Link to="/" className="fab fa-google-plus-square"></Link></li>
                    <li className="flat-nav-menu"><Link to="/" className="fab fa-youtube-square"></Link></li>
                </ul>
            </div>
        </>
    )
}

export default SocialMenu
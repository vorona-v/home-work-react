import React from "react"
import FooterMenu from "./FooterMenu/FooterMenu"
import SocialMenu from "./SocialMenu/SocialMenu"
import './Footer.css'

const Footer = () => {
    return (
        <footer className="flat-footer-wrap">
            <div className="container footer-row">
                <div className="flat-subscription-form">
                    <h3 className="flat-subscription-title">Subscribe to our newsletter</h3>
                    <form>
                        <span className="flat-form-wrap">
                            <i className="far fa-envelope"></i>
                            <input type="email" value="" placeholder="you@email.com"/>
                            <button type="submit" className="flat-btn">Subscribe</button>
                        </span>
                    </form>
                </div>
                <div className="flat-footer-menu">
                    <FooterMenu />
                    <SocialMenu />
                </div>
            </div>
        </footer>
    )
}

export default Footer
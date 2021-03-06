import React from "react"

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
                    <div className="flat-footer-menu-wrap">
                        <div className="flat-footer-menu-title">category</div>
                        <ul>
                            <li className="flat-nav-menu"><a href="#">Reality</a></li>
                            <li className="flat-nav-menu"><a href="#">Living</a></li>
                            <li className="flat-nav-menu"><a href="#">EduCation</a></li>
                            <li className="flat-nav-menu"><a href="#">Entertainment</a></li>
                            <li className="flat-nav-menu"><a href="#">Mobility</a></li>
                        </ul>
                    </div>
                    <div className="flat-footer-social-wrap">
                        <div className="flat-footer-menu-title">Follow us</div>
                        <ul>
                            <li className="flat-social-menu"><a href="#" className="fab fa-facebook-square"></a></li>
                            <li className="flat-social-menu"><a href="#" className="fab fa-twitter-square"></a></li>
                            <li className="flat-social-menu"><a href="#" className="fab fa-google-plus-square"></a></li>
                            <li className="flat-social-menu"><a href="#" className="fab fa-youtube-square"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
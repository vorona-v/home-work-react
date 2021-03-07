import React from "react"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import SearchForm from "./SearchForm/SearchForm"
import LoginForm from "./LoginForm/LoginForm"

const Header = () => {
    return (
        <header className="flat-header-wrap">
            <div className="flat-header-menu">
                <div className="container">
                    <div className="flat-menu-row">
                        <Logo />
                        <Menu />
                        <div className="flat-quick-btn">
                            <SearchForm />
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
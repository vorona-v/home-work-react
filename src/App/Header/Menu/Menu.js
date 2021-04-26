import React, { Component } from "react"
import { Link } from "react-router-dom"

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <>
                <div className={'flat-nav-menu menu-' + `${this.state.isToggleOn ? '' : 'opened'}`}>

                    <button onClick={this.handleClick} className="flat-nav-menu-title">category</button>

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
}

export default Menu
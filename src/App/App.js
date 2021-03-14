import React, { Component } from "react"
import { Route } from 'react-router'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import "../common/style/style.css"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Main from "./Main/Main"
import Reality from "./Main/Reality/Reality"
import Living from "./Main/Living/Living"
import Education from "./Main/Education/Education"
import Entertainment from "./Main/Entertainment/Entertainment"
import Mobility from "./Main/Mobility/Mobility"
import Slider from "./Main/Slider/Slider"
import PostPage from "./Main/PostPage/PostPage"


class App extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="main">
                    <Slider />

                    <Route path="/" exact render={() => (
                        <Main />
                    )}/>

                    <Route path="/reality" component={Reality}/>
                    <Route path="/living" component={Living}/>
                    <Route path="/education" component={Education}/>
                    <Route path="/entertainment" component={Entertainment}/>
                    <Route path="/mobility" component={Mobility}/>
                    <Route path="/posts/:id" component={PostPage} />

                    

                </main> 
                
                <Footer />
            </>
        )
    }
}

export default App
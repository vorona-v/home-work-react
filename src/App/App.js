import React, { Component } from "react"
import { Route } from 'react-router'
import axios from 'axios'
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

    state = {
        posts: []
    }
    
    componentDidMount = () => {
        axios.get(`https://run.mocky.io/v3/d13ca50d-fc0f-4430-a4bd-c46633ac0f95`)
          .then(res => {
            const posts = res.data;
            this.setState({ posts });
        })
       
    }

    render() {
        return (
            <>
                <Header />
                <main className="main">
                    <Slider />

                    <Route path="/" exact render={() => (
                        <Main posts={this.state.posts} />
                    )}/>

                    <Route path="/reality" render={() => (
                        <Reality posts={this.state.posts} />
                    )}/>

                    <Route path="/living" render={() => (
                        <Living posts={this.state.posts} />
                    )}/>
                    
                    <Route path="/education" render={() => (
                        <Education posts={this.state.posts} />
                    )}/>
                    
                    <Route path="/entertainment" render={() => (
                        <Entertainment posts={this.state.posts} />
                    )}/>
                    
                    <Route path="/mobility" render={() => (
                        <Mobility posts={this.state.posts} />
                    )}/>

                    <Route path="/posts/:id" render={({match}) => (
                        <PostPage posts={this.state.posts} match={match} />
                    )}/>

                    {/* <Route path="/reality" component={Reality} posts={this.state.posts}/>
                    <Route path="/living" component={Living} posts={this.state.posts}/>
                    <Route path="/education" component={Education} posts={this.state.posts}/>
                    <Route path="/entertainment" component={Entertainment} posts={this.state.posts}/>
                    <Route path="/mobility" component={Mobility} posts={this.state.posts}/> */}
                    {/* <Route path="/posts/:id" component={PostPage} posts={this.state.posts} /> */}

                    

                </main> 
                
                <Footer />
            </>
        )
    }
}

export default App
import React, { Component } from "react"
import { Route } from 'react-router'
import axios from 'axios'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import "../common/style/style.css"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Main from "./Main/Main"

import Slider from "./Main/Slider/Slider"
import PostPage from "./Main/PostPage/PostPage"
import CategoriesPage from "./Main/CategoriesPage/CategoriesPage"



class App extends Component {

    state = {
        posts: [],
        
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
                <Header posts={this.state.posts} />
                <main className="main">
                    <Slider />

                    <Route path="/" exact render={() => (
                        <Main posts={this.state.posts} />
                    )}/>

                    <Route path="/:category" render={({match}) => (
                        <CategoriesPage posts={this.state.posts} match={match} />
                    )}/>

                    <Route path="/posts/:id" render={({match}) => (
                        <PostPage posts={this.state.posts} match={match} />
                    )}/>

                </main> 
                
                <Footer />
            </>
        )
    }
}

export default App
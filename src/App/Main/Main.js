import React from "react"
import PostList from "./Posts/PostList"
import Slider from "./Slider/Slider"
import OffersList from "./Offers/OffersList"


const Main = () => {
    return (
        <>
            <Slider />
            <PostList />
            <OffersList />   
        </>
    )
}

export default Main
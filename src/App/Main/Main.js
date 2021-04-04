import React from "react"
import PostList from "./Posts/PostList"
import OffersList from "./Offers/OffersList"


const Main = ({posts}) => {
    return (
        <>
            <PostList posts={posts} />
            <OffersList />   
        </>
    )
}

export default Main
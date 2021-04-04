import React from 'react'
import { Route } from 'react-router'
import { connect } from "react-redux"
import Testimonials from '../../../Components/Testimonials/Testimonials'
import './PostPage.css'

const PostPage = ({
    posts,
    match,
    postsObject = getPostsObject(posts),
    isLiked,
}) => {

    const id = match.params.id

    if(posts.length === 0) {
        return null;
    } else {
        return (
            <>
    
                <section className={ 'flat-post-page flat-' + postsObject[id].category }>
                    <div className="container">
                        <div className="flat-post-like">
                            <button>
                                {isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                            </button> 
                        </div>
                        <div className='flat-secondary-title'>{postsObject[id].title}</div>
                        <div className="flat-post-text" dangerouslySetInnerHTML={{
                            __html:postsObject[id].description
                        }}>
                        </div>
                        <Route path={`/posts/${id}`} exact component={Testimonials}/>
                    </div>
                </section>
            </>
        )
    }
    
}

export const getPostsObject = array => array.reduce((obj, post) => ({
    ...obj,
    [post.id]:post
}),{})

const mapState = (state,{id}) => ({
    isLiked:state[id]
})
console.log(mapState)

export default connect(
    mapState
) (PostPage)
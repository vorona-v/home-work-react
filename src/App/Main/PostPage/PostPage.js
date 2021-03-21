import React from 'react'
import { Route } from 'react-router'
import { connect } from "react-redux"
import posts, { getPostsObject } from '../Posts/posts'
import Testimonials from '../../../Components/Testimonials/Testimonials'
import './PostPage.css'

const PostPage = ({
    match,
    postsObject = getPostsObject(posts),
    isLiked,
    removeLike,
    addLike
}) => {
    const id = match.params.id
    return (
        <>
            <section className={ 'flat-post-page flat-' + postsObject[id].category }>
                <div className="container">
                    <div className="flat-post-like">
                        <button onClick={() => isLiked ? removeLike(id) : addLike(id) }>
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

const mapState = (state,{id}) => ({
    isLiked:state[id]
})


const mapDispatch = dispatch => ({
    addLike:(id) => dispatch({
        type:'LIKE',
        id
    }),
    removeLike:(id) => dispatch({
        type:'DISLIKE',
        id
    })
})

export default connect(
    mapState,
    mapDispatch
) (PostPage)
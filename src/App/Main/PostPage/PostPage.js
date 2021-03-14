import React from 'react'
import { Route } from 'react-router'
import posts, { getPostsObject } from '../Posts/posts'
import Testimonials from '../../../Components/Testimonials/Testimonials'
import './PostPage.css'

const PostPage = ({
    match,
    postsOblect = getPostsObject(posts)
}) => {
    const id = match.params.id
    return (
        <>
            <section className={ 'flat-post-page flat-' + postsOblect[id].category }>
                <div className="container">
                    <div className='flat-secondary-title'>{postsOblect[id].title}</div>
                    <div className="flat-post-text" dangerouslySetInnerHTML={{
                        __html:postsOblect[id].description
                    }}>
                    </div>
                    <Route path={`/posts/${id}`} exact component={Testimonials}/>
                </div>
            </section>
        </>
    )
}

export default PostPage

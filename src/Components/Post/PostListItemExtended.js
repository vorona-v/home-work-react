import React, { Component } from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux"


const PostListItemExtended = ({
    post,
    id,
    title,
    category,
    image,
    icon,
    isLiked,
    addLike,
    removeLike
}) => (

    <div className={ 'flat-post-item flat-' + post.category }>
        <div className="flat-post-wrap">
            <Link to={`/posts/${post.id}`} className="flat-post-image-wrap">
                <img src={post.image} alt={post.title} />
                <div className="flat-post-category"><span className={post.icon}></span></div>
            </Link>
            <div className="flat-post-like">
                <button onClick={() => isLiked ? removeLike(post.id) : addLike(post.id) }>
                    {isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                </button> 
            </div>
            <div className="flat-post-info-wrap">
                <Link to={`/posts/${post.id}`} className="flat-post-title">{post.title}</Link>
                <div className="flat-post-category-title">{post.category}</div>
                <div className="flat-post-rating-wrap">
                    <div className="flat-post-rating">
                        {/* <div className="flat-rating">
                            <input type="radio" id="star-1" name="stars"/>
                            <label for="star-1"><i className="fas fa-star"></i></label>
                            <input type="radio" id="star-2" name="stars"/>
                            <label for="star-2"><i className="fas fa-star"></i></label>
                            <input type="radio" id="star-3" name="stars"/>
                            <label for="star-3"><i className="fas fa-star"></i></label>
                            <input type="radio" id="star-4" name="stars"/>
                            <label for="star-4"><i className="fas fa-star"></i></label>
                            <input type="radio" id="star-5" name="stars" checked="checked"/>
                            <label for="star-5"><i className="fas fa-star"></i></label>
                        </div> */}
                        <div className="flat-post-rating-count">(365)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


const mapState = (state,{post}) => ({
    isLiked:state[post.id]
})


export default connect(
    mapState,
) (PostListItemExtended)
import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { connect } from "react-redux"


class PostListItem extends Component {
    render() {
        const {
            id,
            title,
            category,
            image,
            icon,
            isLiked,
            addLike,
            removeLike
        } = this.props;

        return (
            <div className={ 'flat-post-item flat-' + category }>
                <div className="flat-post-wrap">
                    <Link to={`/posts/${id}`} className="flat-post-image-wrap">
                        <img src={image} alt="slide" />
                        <div className="flat-post-category"><span className={icon}></span></div>
                    </Link>
                    <div className="flat-post-like">
                        <button onClick={() => isLiked ? removeLike(id) : addLike(id) }>
                            {isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                        </button> 
                    </div>
                    <div className="flat-post-info-wrap">
                        <Link to={`/posts/${id}`} className="flat-post-title">{title}</Link>
                        <div className="flat-post-category-title">{category}</div>
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
    }
}

PostListItem.propTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
    category:PropTypes.string,
}

PostListItem.defaultProps = {
    description:"No description ...",
    image:"/images/no-image.png",
}

const mapState = (state,{id}) => ({
    isLiked:state.postLikeState[id]
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
) (PostListItem)
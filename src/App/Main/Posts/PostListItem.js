import React, { Component } from "react"
import PropTypes from 'prop-types'


class PostListItem extends Component {
    render() {
        const {
            title,
            category,
            image,
            icon,
        } = this.props;

        return (
            <div className={ 'flat-post-item flat-' + category }>
                <div className="flat-post-wrap">
                    <a href="/" className="flat-post-image-wrap">
                        <img src={image} alt="image" />
                        <div className="flat-post-category"><span className={icon}></span></div>
                    </a>
                    <div className="flat-post-info-wrap">
                        <div className="flat-post-title">{title}</div>
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

export default PostListItem
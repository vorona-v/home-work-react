import React, { Component } from "react"

import './PostFilters.css'

class PostFilters extends Component {
    render() {
        const {
            posts,
            category,
            icon,
        } = this.props;

        return (
            <>
                <div className={ 'flat-post-category-filter flat-' + category }>
                    <span className={icon}></span>
                </div>
            </>
        )
    }
}

export default PostFilters
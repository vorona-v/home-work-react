import React, { Component } from "react"

class PostFilters extends Component {
    render() {
        const {
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
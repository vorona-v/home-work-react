import React from "react"

import PostListItem from './PostListItem'

import './Post.css'
import './PostFilters.css'


const PostList = ({
    posts
}) => {
    return (
        <section className="flat-posts-wrap">
            <div className="container">
                <div className="flat-post-filter-row">
                    <div className="flat-post-time-filters">
                        <div className="flat-post-time-filter-name active">Recommended</div>
                        <div className="flat-post-time-filter-name">latest</div>
                        <div className="flat-post-time-filter-name">Highlights</div>
                    </div>
                    <div className="flat-post-category-filters">
                        <div className="flat-post-category-name">filters:</div>
                        <div className="flat-post-category-wrap">
                            <div className="flat-post-category-filter flat-reality"><span className="fas fa-home"></span></div>
                            <div className="flat-post-category-filter flat-living"><span className="fas fa-user-alt"></span></div>
                            <div className="flat-post-category-filter flat-education"><span className="fas fa-graduation-cap"></span></div>
                            <div className="flat-post-category-filter flat-entertainment"><span className="fas fa-music"></span></div>
                            <div className="flat-post-category-filter flat-mobility"><span className="fas fa-bus"></span></div>
                        </div>
                    </div>
                </div>

                <div className="flat-posts">
                    {
                        posts.map(({
                            id,
                            title,
                            description,
                            category,
                            image,
                            icon,
                        }) =>
                            <PostListItem
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                category={category}
                                image={image}
                                icon={icon}
                            />
                        )
                    }
                </div>
            
            </div>
        </section>
    )
}

export default PostList
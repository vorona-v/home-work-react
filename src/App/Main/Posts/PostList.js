import React from "react"
import PostListItem from './PostListItem'
import PostFilters from './PostFilters'
import posts from './posts'

const PostList = () => {
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
                            {
                                posts.map(({
                                    id,
                                    category,
                                    icon,
                                }) =>
                                    <PostFilters
                                        key={id}
                                        id={id}
                                        category={category}
                                        icon={icon}
                                    />
                                )
                            }
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
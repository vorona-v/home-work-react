import React from "react"
import PostListItem from '../Posts/PostListItem'
import posts from '../Posts/posts'

const Living = () => {
    return (
        <section className="flat-posts-wrap">
            <div className="container">
                <div className="flat-posts">
                    {
                        posts.filter(item => item.category === "living").map(({
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

export default Living
import React from "react"
import PostListItem from '../Posts/PostListItem'

const Reality = ({
    posts
}) => {
    console.log('!@# render');
    return (
        <section className="flat-posts-wrap">
            <div className="container">
                <div className="flat-posts">
                    {
                        posts.filter(item => item.category === "reality").map(({
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

export default Reality
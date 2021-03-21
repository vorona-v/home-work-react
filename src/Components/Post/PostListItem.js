import React from "react"

const PostListItem = ({
    post,
    id
}) => {
    return (
        <div key={id}>
            {post.id}: {post.title}
        </div>
    )
}

export default PostListItem
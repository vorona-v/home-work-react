import React from 'react'
import {keys} from "lodash"
import posts, { getPostObject } from '../../App/Main/Posts/posts'
import PostListItem from './PostListItem'

const PostList = ({
    postObject=getPostObject(posts),
    PostItem = PostListItem
}) => {
    return (
        <div>
            {
                keys(posts).map(id => (
                    <PostItem
                        key={id}
                        post={postObject[id]}
                    />
                ))
            }
        </div>
    )
}

export default PostList

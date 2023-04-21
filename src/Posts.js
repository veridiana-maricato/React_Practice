import React from 'react'

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default Posts
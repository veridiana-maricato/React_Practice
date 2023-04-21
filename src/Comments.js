import React from 'react'

const Comments = ({ comments }) => {
    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <h2>{comment.body}</h2>
                </div>
            ))}
        </div>
    )
}

export default Comments
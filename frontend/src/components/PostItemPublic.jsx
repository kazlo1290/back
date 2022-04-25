import React from 'react'

function PostItemPublic({post}) {

  return (
    <div className='post-item'>
        <h2>{post.title}</h2>
        <h3>{post.content}</h3>
        <h3>{post.author}</h3>
    </div>
  )
}

export default PostItemPublic
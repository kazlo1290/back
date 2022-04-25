import React from 'react'

function PostItemPublic({post}) {

  return (
    <div className='post-item'>
      <div className="user_md">
        <div className='user_img'>
          <a href={post.user}><img src={post.img} alt='User' /></a>
        </div>
        <div className="user_name">
          <button className='user_name_link'>
            <a href="/">{post.author}</a>
          </button>
          <div className="user_post_time">
          Apr 25 /2022
          </div>
        </div>
      </div>
      <div className="user_post_container">
        <a className="user_post_title" href="/"><h2>{post.title}</h2></a>
        <div className="user_post_hashtags">
          <a className="user_post_hashtag" href="/">#top</a>
          <a className="user_post_hashtag" href="/">#top</a>
          <a className="user_post_hashtag" href="/">#top</a>
          <a className="user_post_hashtag" href="/">#top</a>
        </div>
        <div className="user_post_content">
          {post.content}
        </div>
        <div className="user_post_full">
          <button className='user_post_link'>
            <a className="user_post_link_a" href={post.slug}>Цааш</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostItemPublic
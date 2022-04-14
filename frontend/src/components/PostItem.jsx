import { useDispatch } from 'react-redux'
import { deletePost } from '../api/posts/postSlice'

function PostItem({ post }) {
    const dispatch = useDispatch()

    return (
        <div className='goal'>
            <h2>{post.title}</h2>
            <h3>{post.content}</h3>
            <h3>{post.author}</h3>
            <button onClick={() => dispatch(deletePost(post._id))} className='close'>
                X
            </button>
        </div>
    )
}

export default PostItem
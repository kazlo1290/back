import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../api/posts/postSlice'

function PostForm() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createPost({ title, content }))
        setTitle('')
        setContent('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Гарчиг</label>
                    <input
                     type='text'
                     name='title'
                     id='title'
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     />
                </div>
                <div className='form-group'>
                    <label htmlFor='content'>Контент</label>
                    <input
                    type='text'
                    name='content'
                    id='content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>
                        Нийтлэл Нэмэх
                    </button>
                </div>
            </form>
        </section>
    )
}

export default PostForm
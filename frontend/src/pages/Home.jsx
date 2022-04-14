import React from 'react'
import PostsJSX from '../components/Posts'

function Home() {

  return (
    <>
      <section className='heading'>  
        <p>Мэдээний самбар</p>
      </section>

      <section className='container'>
        <br />
        <h3>Нийт Нийтлэл</h3>
        <br/>
        <PostsJSX />
      </section>
    </>
  )
}

export default Home
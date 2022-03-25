import React from 'react'
import PostsJSX from '../components/Posts'
import GoalsJSX from '../components/Goals'

function Home() {

  return (
    <>
      <section className='heading'>  
        <p>Мэдээний самбар</p>
      </section>

      <section className='content'>
        <br />
        <h3>Нийт мэдээ</h3>
        <br />
        <GoalsJSX />
        <br />
        <h3>Нийт Нийтлэл</h3>
        <br/>
        <PostsJSX />
      </section>
    </>
  )
}

export default Home
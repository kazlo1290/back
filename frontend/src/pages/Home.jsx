import React from 'react'
import PostsJSX from '../components/Posts'
import Aside from '../components/Aside';
import Header from '../components/Header'
function Home() {

  return (
    <>
    <Aside />
    <main >
      <Header />
      <section className='heading'>  
        <p>Мэдээний самбар</p>
      </section>

      <section className='container'>
        <br />
        <h3>Нийт Нийтлэл</h3>
        <br/>
        <PostsJSX />
      </section>
      </main>
    </>
  )
}

export default Home
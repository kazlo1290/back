import React from 'react'
import PostsJSX from '../components/Posts'
// import PostOff from '../components/PostOff';
import Header from '../components/Header'
import { Helmet } from 'react-helmet'
import '../assets/css/home.css'
function Home() {
  // Title
  const TITLE = 'Энгийн өнгө'
  return (
    <>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <main className='main' >
      <Header />
      <div className='home_container'>
      <section className='heading maxw'>  
        <p>Мэдээний самбар</p>
      </section>

      <section className='posts_container maxw'>
        <br />
        <h3>Нийт Нийтлэл</h3>
        <br/>
        <PostsJSX />
        {/* <PostOff /> */}
      </section>
      </div>
    </main>
    </>
  )
}

export default Home
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
      <section className='heading'>  
        <p>Мэдээний самбар</p>
      </section>

      <section className='home_container'>
        <br />
        <h3>Нийт Нийтлэл</h3>
        <br/>
        <PostsJSX />
        {/* <PostOff /> */}
      </section>
    </main>
    </>
  )
}

export default Home
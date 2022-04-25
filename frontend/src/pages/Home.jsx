import React from 'react'
// import PostsJSX from '../components/Posts'
import PostOff from '../components/PostOff';
import Header from '../components/Header'
import { Helmet } from 'react-helmet'
import '../assets/css/home.css'
import '../assets/css/posts.css'
import Tabs from '../components/Tabs'
function Home() {
  // Title
  const TITLE = 'Энгийн өнгө'
  return (
    <>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
      <Header />
    <main className='main' >
      <div className='home_container maxw'>
      <section className='posts_container'>
        <Tabs>
        <div label="Latest">
          {/* <PostsJSX /> */}
          <PostOff />
        </div>
        <div label="Top">
          {/* <PostsJSX /> */}
          <PostOff />
        </div>
        <div label="Favorite">
          <Tabs>
            <div label="df">
              <PostOff />
            </div>
            <div label="sdf">
              <section className='content'>
              {/* <PostsJSX /> */}
              </section>
            </div>
          </Tabs>
        </div>
      </Tabs>
      </section>
      </div>
    </main>
    </>
  )
}

export default Home
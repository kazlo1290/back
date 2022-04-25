import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Aside from '../components/Aside';
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

function Dashboard() {
  // Title
  const TITLE = '{user && user.name}'

  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

    if (!user) {
      navigate('/login')
    }

  return (
    <>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <main className='main'>
      <Aside />
      <Header />
      <section className='heading'>
        <h1>Тавтай Морилно уу {user && user.name}</h1>
        <p>Мэдээний самбар</p>
      </section>
      <section className='content'>
        <ul>
          <li>
            <Link to='/posts'>
              Post нэмэх
            </Link>
          </li>
        </ul>
      </section>
    </main>
    </>
  )
}

export default Dashboard
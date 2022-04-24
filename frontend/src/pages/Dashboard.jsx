import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Aside from '../components/Aside';
import Header from '../components/Header'

function Dashboard() {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

    if (!user) {
      navigate('/login')
    }

  return (
    <>
    <Aside />
    <main>
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
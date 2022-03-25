import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Dashboard() {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

    if (!user) {
      navigate('/login')
    }

  return (
    <>
      <section className='heading'>
        <h1>Тавтай Морилно уу {user && user.name}</h1>
        <p>Мэдээний самбар</p>
      </section>
      <section className='content'>
        <ul>
          <li>
            <Link to='/goals'>
              Goal нэмэх
            </Link>
          </li>
          <li>
            <Link to='/posts'>
              Post нэмэх
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Dashboard
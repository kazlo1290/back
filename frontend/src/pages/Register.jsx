import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../api/auth/authSlice'
import Spinner from '../components/Spinner'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import '../assets/css/log_reg.css'
import Logo from '../assets/img/logopng.png'
import Avatar from '../assets/img/avatar.png'
function Register() {

  // Title
  const TITLE = 'Бүртгүүлэх'

  // Style
  const Item = styled(NavLink)`
  color: var(--p-dark-6);
  &:hover{
    text-decoration: underline;
  }
  `

  // User Auth
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Нууц үг ижил байх ёстой')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className='logres_container'>
      <section className='logres_heading'>
      <Item to='/'>
        <img src={Logo} alt="Logo" />
        </Item>
      </section>

      <section className='logres_form'>
      <div className='defualt_avatar' 
        style={{ 
        backgroundImage: `url(${Avatar})`,}}>
        </div>
        <h1>{ TITLE }</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Таны нэр'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Таны и-мэйл хаяг'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Нууц үг'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Нууц үг батлах'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              {TITLE}
            </button>
          </div>
        </form>
        <div className='logres_use'>
        <Item to='/login'>Нэвтрэх</Item>
        <Item to='/user/lostpassword'>Нууц үг сэргээх</Item>
        </div>
      </section>

      <section className='logres_to_home'>
      <Item to='/'>Нүүр хуудас руу буцах</Item>
      </section>
      </div>
    </>
  )
}

export default Register
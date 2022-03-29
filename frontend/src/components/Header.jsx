import Logo from '../assets/img/png/logopng64.png'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import styled from 'styled-components'

const Container = styled.header`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 80px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  /* box-shadow: 1px 0px 20px rgba(255, 98, 121, 0.3); */
  box-shadow: 1px 0px 20px rgba(4, 4, 24, 0.3);
  .active {
  background: rgba(4, 4, 24, 1);
  border-right: 4px solid rgba(255, 98, 121, 0.8);
  svg {
    fill: rgba(255, 98, 121, 1);
  }
  }
` 
const Item = styled(NavLink)`
  height: 50px;
  padding: 13px 24px 13px 28px;
  border-right: 4px solid #fff;
`
const ItemLogo = styled(Link)`
  padding: 0;
`
function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
      <Container>
      <div className='logo'>
        <ItemLogo to='/'>
          <img className='logoimg' src={Logo} alt='logo' />
        </ItemLogo>
      </div>
      <div className='navbar'>
          <Item exact to='/' activeClassName="active">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
          </svg> 
          <span className='none'>Home</span>
          </Item>
          <Item to='/changelog' activeClassName="active">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M9 22h1v-2h-.989C8.703 19.994 6 19.827 6 16c0-1.993-.665-3.246-1.502-4C5.335 11.246 6 9.993 6 8c0-3.827 2.703-3.994 3-4h1V2H8.998C7.269 2.004 4 3.264 4 8c0 2.8-1.678 2.99-2.014 3L2 13c.082 0 2 .034 2 3 0 4.736 3.269 5.996 5 6zm13-11c-.082 0-2-.034-2-3 0-4.736-3.269-5.996-5-6h-1v2h.989c.308.006 3.011.173 3.011 4 0 1.993.665 3.246 1.502 4-.837.754-1.502 2.007-1.502 4 0 3.827-2.703 3.994-3 4h-1v2h1.002C16.731 21.996 20 20.736 20 16c0-2.8 1.678-2.99 2.014-3L22 11z"></path>
          </svg>
          <span className='none'>ChangeLog</span>
          </Item>
      </div>
        {user ? (
          <div className='navbar space'>
              <Item to='/dashboard' activeClassName="active">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
              </svg> 
              <span className='none'>Dashboard</span>
              </Item>
                <button className='primary_btn' onClick={onLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m2 12 5 4v-3h9v-2H7V8z"></path><path d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path>
                </svg>
                <span className='none'>Гарах</span>
                </button>
          </div>
        ) : (
          <div className='navbar space'>
              <Item to='/login' activeClassName="active">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
              </svg>
              <span className='none'>Нэвтрэх</span>
              </Item>
              <Item to='/register' activeClassName="active">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8a3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4 3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2 1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></path>
              </svg>
              <span className='none'>Бүртгүүлэх</span>
              </Item>
          </div>
        )} 
        </Container>
   
  )
}

export default Header
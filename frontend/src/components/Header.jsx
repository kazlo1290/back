import Logo from '../assets/img/png/logopng64.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

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
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          <img className='logoimg' src={Logo} alt='logo' />
        </Link>
      </div>
      <ul>
        <li>
          <Link to='/dashboard'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
          </svg> 
          <span className='none'>Dashboard
          </span>
          </Link>
        </li>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
            </svg> 
            <span className='none'>Гарах
            </span>
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
              </svg> 
              <span className='none'>
                Нэвтрэх
              </span>
           
              </Link>
            </li>
            <li>
              <Link to='/register'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
              </svg> 
              <span className='none'>Бүртгүүлэх
                </span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
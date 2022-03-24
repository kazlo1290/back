import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { MdAccountBox } from "react-icons/md";
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
        <Link to='/'>HI</Link>
      </div>
      <ul>
        <li>
          <Link to='/dashboard'>
            <MdAccountBox /> Dashboard
          </Link>
        </li>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Гарах
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Нэвтрэх
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Бүртгүүлэх
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
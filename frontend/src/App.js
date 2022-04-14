import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import PostsPage from './pages/PostsPage'
import styled from 'styled-components'
  

const SEC = styled.main`
  width: calc(100% - 80px);
  height: 100vh;
  margin: 0;
  padding: 20px 0;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: 767px) {
    margin-top: 100px;
    width: 100%;
  }
`
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <SEC>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          </SEC>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
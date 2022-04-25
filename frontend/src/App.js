import React from "react";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import PostsPage from './pages/PostsPage'
import Changelog from './pages/Changelog'
function App() {
  // const [sidebarOpen, setSideBarOpen] = useState(false);
  // const handleViewSidebar = () => {
  //   setSideBarOpen(!sidebarOpen);
  // };

  return (
    <>
      <Router>
          {/* <Aside isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/changelog' element={<Changelog />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
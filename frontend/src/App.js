import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Aside from './components/Aside'
import Main from './components/Main'
function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <>
      <Router>
          <Aside isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
          <Main />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
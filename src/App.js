import React from 'react';
import { Route, Routes, useLocation } from "react-router";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Components/header';
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Changelog from "./Pages/Changelog";
import Project from "./Pages/Project";
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import styled from "styled-components";

const Pages = styled.main`
  width: 100vw;
  height: calc(100vh - 3.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  h1 {
    background: linear-gradient(to right, #803bec 30%, #fffddd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
    <Header />
      <Pages>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/project" element={<Project />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      </Pages>
      <ToastContainer />
    </>
  );
}

export default App;

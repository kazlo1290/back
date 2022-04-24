import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PostsPage from '../pages/PostsPage'
import Header from './Header'
import styled from "styled-components";
import '../assets/css/main.css'

const Container = styled.div`
  position: relative;
  top: 100px;
`
function Main(props) {
  const MainClass = props.isOpen ? "MainOpen" : "MainClose";
  return (
    <main className={MainClass}>
      <Header />
      <Container>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
    </main>
  );
};
export default Main;

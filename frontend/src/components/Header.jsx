import React from "react";
import styled from "styled-components";
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../api/auth/authSlice'
import { FaBeer } from 'react-icons/fa';
import { BiCategory, BiCollection } from "react-icons/bi";
import { VscSignIn } from "react-icons/vsc";
import Logo from '../assets/img/logoimg.jpg'
import '../assets/css/header.css'
const Container = styled.header`
    display: flex;
    width: 100%;
    padding: 0 20px;
    justify-content: flex-end;
    background: var(--p-dark);
    right: 0;
    justify-content: space-between;
    .active {
        color: rgba(255, 98, 121, 0.8);
    svg {
        fill: rgba(255, 98, 121, 1);
    }
    }
`
const Item = styled(NavLink)`
    display: flex;
    padding: 10px;
    margin: 0 10px;
    flex-direction: column;
    align-items: center;
    &:hover {
    color: var(--p-pink);
    svg{
      fill: var(--p-pink);
    }
  }
`
const ItemLogo = styled(Link)`
  padding: 0;
  display: flex;
  align-items: center;
`
const Text = styled.span`
    font-size: var(--p-s-text);
    line-height: 20px;
    height: 20px;
`
function Header() {
    // User Auth
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
          <div className="header-items">
            <ItemLogo to='/'>
              <img className='logoimg' src={Logo} alt='logo' />
                <Text 
                style={{ 
                marginLeft: `10px`,
                textTransform: `uppercase`,
                fontWeight: `600`
                }}>
                  Colorfully.mn
                </Text>
            </ItemLogo>
          </div>
          <div className="header-items">
          <Item exact="true" to='/' activeclassname="active">
          <Text><BiCategory /></Text>
          <Text>Home</Text>
          </Item>
          <Item to='/changelog' activeclassname="active">
          <Text><BiCollection /></Text>
          <Text>ChangeLog</Text>
          </Item>
          </div>
          <div className="header-items">
            {user ? (
            <div className='header-item'>
              <Item to='/dashboard' activeclassname="active">
              <Text><FaBeer/></Text>
              <Text>Dashboard</Text>
              </Item>
              <button className='primary_btn' onClick={onLogout}>
              <Text><FaBeer/></Text>
              <Text>Гарах</Text>
              </button>
            </div>
            ) : (
            <div className='header-item'>
              <Item to='/login' activeclassname="active">
              <Text><VscSignIn/></Text>
              <Text>Нэвтрэх</Text>
              </Item>
            </div>
            )} 
          </div>
        </Container>
    );
};

export default Header
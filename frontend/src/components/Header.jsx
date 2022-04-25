import React from "react";
import styled from "styled-components";
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../api/auth/authSlice'
// import { FaBeer } from 'react-icons/fa';
import Logo from '../assets/img/logoimg.jpg'
import '../assets/css/header.css'
const Container = styled.header`
    display: flex;
    width: var(--p-s100v);
    padding: 0 var(--p-s20);
    justify-content: flex-end;
    background: var(--p-white);
    right: 0;
    justify-content: space-between;
    box-shadow: var(--p-bs-header);
    .active {
        color: var(--p-pink-8);
    svg {
        fill: var(--p-pink-8);
    }
    }
`
const Item = styled(NavLink)`
    display: flex;
    padding: var(--p-s10);
    margin: 0 var(--p-s10);
    flex-direction: column;
    align-items: center;
    color: var(--p-dark);
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
  color: var(--p-dark);
`
const Text = styled.span`
    font-size: var(--p-s-text);
    line-height: 24px;
    height: 24px;
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
                marginLeft: `var(--p-s10)`,
                textTransform: `uppercase`,
                fontWeight: `600`
                }}>
                  Colorfully.mn
                </Text>
            </ItemLogo>
          </div>
  
          <div className="header-items">
            <div className="header-item">
            <Item exact="true" to='/' activeclassname="active">
            {/* <Text><FaBeer/></Text> */}
            <Text>Home</Text>
            </Item>
            <Item to='/changelog' activeclassname="active">
            {/* <Text><FaBeer/></Text> */}
            <Text>ChangeLog</Text>
            </Item>
            </div>
            {user ? (
            <div className='header-item'>
              <Item to='/dashboard' activeclassname="active">
              {/* <Text><FaBeer/></Text> */}
              <Text>Dashboard</Text>
              </Item>
              <button className='primary_btn' onClick={onLogout}>
              {/* <Text><FaBeer/></Text> */}
              <Text>Гарах</Text>
              </button>
            </div>
            ) : (
            <div className='header-item'>
              <Item to='/login' activeclassname="active">
              {/* <Text><FaBeer/></Text> */}
              <Text>Нэвтрэх</Text>
              </Item>
            </div>
            )} 
          </div>
        </Container>
    );
};

export default Header
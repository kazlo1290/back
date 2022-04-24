import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../api/auth/authSlice'
import { FaBeer } from 'react-icons/fa';
import { VscAccount, VscSignIn } from "react-icons/vsc";
const Container = styled.header`
    display: flex;
    width: 100%;
    padding: 0 20px;
    justify-content: flex-end;
    background: var(--p-dark);
    right: 0;
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
const Text = styled.span`
    font-size: var(--p-s-text);
    line-height: 20px;
    height: 20px;
`
function Header(props) {

    const TextClass = props.isOpen ? "TextOpen" : "TextOpen";

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
            {user ? (
          <div className='header-item'>
              <Item to='/dashboard' activeclassname="active">
              <Text><FaBeer/></Text>
              <Text className={TextClass}>Dashboard</Text>
              </Item>
                <button className='primary_btn' onClick={onLogout}>
                <Text><FaBeer/></Text>
                <Text className={TextClass}>Гарах</Text>
                </button>
          </div>
        ) : (
          <div className='header-item'>
              <Item to='/login' activeclassname="active">
              <Text><VscSignIn/></Text>
              <Text className={TextClass}>Нэвтрэх</Text>
              </Item>
              <Item to='/register' activeclassname="active">
              <Text><VscAccount/></Text>
              <Text className={TextClass}>Бүртгүүлэх</Text>
              </Item>
          </div>
        )} 
        </Container>
    );
};

export default Header
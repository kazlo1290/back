import React from 'react';
// import Logo from '../assets/img/logoimg.jpg'
import { NavLink} from 'react-router-dom'
import { BiCategory, BiCollection } from "react-icons/bi";
import styled from 'styled-components'
import '../assets/css/aside.css'
const Container = styled.aside`
  position: fixed;
  display: flex;
  height: var(--p-s100vh);
  top: var(--p-s60);
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 0 var(--p-s20) 0;
  transition: width 0.5s ease;
  background: var(--p-dark);
  z-index: 2;
  .active {
  color: var(--p-pink-8);
  border-right: 4px solid var(--p-pink-8);
  svg {
    fill: var(--p-pink-8);
  }
  }
`
const Item = styled(NavLink)`
display: flex;
  padding: 10px 26px 10px 20px;
  border-right: 4px solid transparent;
  &:hover {
    color: var(--p-pink);
    svg{
      fill: var(--p-pink);
    }
  }
`
// const ItemLogo = styled(Link)`
//   padding: 0;
//   display: flex;
//   align-items: center;
// `
// const Button = styled.button`
//     cursor: pointer;
//     position: absolute;
//     right: -12px;
//     top: 18px;
//     width: 24px;
//     background: #040418;
//     height: 24px;
//     border-radius: 30px;
//     border: 2px solid var(--p-dark);
// `
const Text = styled.span`
margin-left: 10px;
font-size: var(--p-s-text);
line-height: 20px;
height: 20px;
`
function Aside(props){

  // Const className
  const TextClass = props.isOpen ? "TextOpen" : "TextOpen";
  const sidebarClass = props.isOpen ? "ContainerOpen" : "ContainerOpen";

  return (
      <Container className={sidebarClass}>
      {/* <Button onClick={props.toggleSidebar}>
      <BiAdjust />
      </Button> */}
      {/* <div className='logo'>
        <ItemLogo to='/'>
          <img className='logoimg' src={Logo} alt='logo' />
          <Text className={TextClass}>Colorfully.mn</Text>
        </ItemLogo>
      </div> */}
      <div className='navbar'>
          <Item exact="true" to='/' activeclassname="active">
          <Text><BiCategory /></Text>
          <Text className={TextClass}>Home</Text>
          </Item>
          <Item to='/changelog' activeclassname="active">
          <Text><BiCollection /></Text>
          <Text className={TextClass}>ChangeLog</Text>
          </Item>
      </div>
      </Container>
  )
}

export default Aside
import React from "react";
import SearchBox from "./ReactSearchBox.tsx";
import logosvg from '../assets/img/logo/colorfully_uppercase.svg'
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--black);
  cursor: pointer;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 2rem;
  text-transform: uppercase;
  &.active {
      color: var(--pink); 
    }
  &:hover {
  }
`;

const ItemLogo = styled(NavLink)`
cursor: pointer;
flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  display: flex;
`
const Text = styled.span`
    display: block;
    font-size: 18px;
    &:hover{
        text-decoration: underline;
    }
`;

function Header() {
    return (
        <header className=" flex items-center content-center justify-between h-56px border-b-0.5 border-pink p-header">
            <div className="flex items-center content-center">
                <div className="">
                    <ItemLogo exact activeClassName="active" to="/">
                        <img className="h-50px aspect-auto" src={logosvg} alt="logo" />
                    </ItemLogo>    
                </div>
                <div className="ml-20px">
                    <SearchBox />
                </div>
            </div>
            <div className="">
                <ul className="flex ">
                <Item
                    exact
                    activeClassName="active"
                    to="/"
                >
                    <Text>Home</Text>
                </Item>
                <Item
                    exact
                    activeClassName="active"
                    to="/blog"
                >
                    <Text>Blog</Text>
                </Item>
                <Item
                    exact
                    activeClassName="active"
                    
                    to="/changelog"
                >
                    <Text>ChangeLog</Text>
                </Item>
                <Item
                    activeClassName="active"
                    to="/project"
                >
                    <Text>Projects</Text>
                </Item>
                </ul>
            </div>
        </header>
    );
};

export default Header;
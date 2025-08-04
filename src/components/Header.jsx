import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 50px;
  background: #04112433;
  color: white;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NavLinkRed = styled.a`
  color: #FE0002;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;


const Button = styled.button`
 width: 135.5px;
height: 31px;
top: 32px;
left: 1142.5px;
border-radius: 4px;
background: #2185D9;
color: #FFFFFF;

`;                           

const Header = () => {
    return (
      <HeaderContainer>
        <Logo>IT-DOOR</Logo>
        <Nav>
          <NavLinkRed href="#process">Курсы</NavLinkRed>
          <NavLink href="#mentors">Менторы</NavLink>
          <NavLink href="#about">О нас</NavLink>
          <NavLink href="#contact">Контакты</NavLink>
        </Nav>
        <Button>Войти</Button>
      </HeaderContainer>
    );
  };
  
  export default Header;
  
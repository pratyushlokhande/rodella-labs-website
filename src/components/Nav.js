import React from "react";
// import Logo from "./Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <NavLink to={"/tech"}>Tech</NavLink>
      <NavLink to={"/team"}>Team</NavLink>
      <NavLink to={"/"}>
        {/* <Logo /> */}
        <span>rodella</span>
      </NavLink>
      <NavLink to={"/gallery"}>Gallery</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
`;

const NavLink = styled(Link)`
  width: 100%;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  span {
    text-transform: lowercase;
    color: #29bf12;
    font-family: "Tourney", cursive;
    font-size: 2rem;
  }

  /* svg {
    margin-top: 0.5rem;
    width: 4rem;

    path {
      fill: #29bf12;
    }
  } */
`;

export default Nav;

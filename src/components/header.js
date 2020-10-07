import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  max-width: 100vw;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch;
  top: 0;
  position: sticky;
  z-index: 10;
  a {
    text-decoration: none;
    background-image: none;
    color: black;
    text-shadow: none;
  }
  padding: 8px 36px;
  box-shadow: ${props => props.theme.headerShadow};
  transition: all 1s;
  transition-timing-function: ${props => props.theme.fadeInTrans};
  background: #fff;
  /* border-bottom: 1px solid black; */
`;

const HeaderTitle = styled.h2`
  opacity: 100;
  transition: all 1s;
  transition-timing-function: ${props => props.theme.fadeInTrans};
  align-self: center;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-self: end;
  a {
    margin: 16px 8px;
    display: flex;
    align-items: center;
    position: relative;
    &:after {
      height: 2px;
      background: ${props => props.theme.magenta};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: ${props => props.theme.popInTrans};
      left: 50%;
      margin-top: 1rem;
    }
    &:nth-child(2) {
      &:after {
        background: ${props => props.theme.cyan};
      }
    }
    &:nth-child(3) {
      &:after {
        background: ${props => props.theme.yellowLight};
      }
    }
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      &:after {
        width: 100%;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle style={{ margin: 0 }}>
        <Link to="/">DEAN NELLIS</Link>
      </HeaderTitle>
      <NavLinks>
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <Link to="/">Contact</Link>
      </NavLinks>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

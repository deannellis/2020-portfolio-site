import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Controller, Scene } from 'react-scrollmagic';

const HeaderWrapper = styled.header`
  max-width: 100vw;
  border-bottom: 1px solid black;
  display: flex;
  flex-flow: space-between;
  align-items: center;
  top: 0;
  position: sticky;
  z-index: 10;
  a {
    text-decoration: none;
    background-image: none;
    color: black;
  }
  padding: 8px 36px;
  background: #f2f2f2;
  h2 {
    
  }
`

const HeaderTitle = styled.h2`
  opacity: 100;
  .not-scrolled {
    opacity: 0;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  text-align: right;
  flex-grow: 1;
  justify-content: flex-end;
  a {
    margin: 16px 8px;
  }
`

const Header = () => (
  <Controller>
    <Scene duration={600} classToggle={['.header-title', 'not-scrolled']} indicators={false}>
      <HeaderWrapper >
        <HeaderTitle style={{ margin: 0 }} className="header-title" >
          <Link to="/">DEAN NELLIS</Link>
        </HeaderTitle>
        <NavLinks>
          <a>Work</a>
          <a>About</a>
          <a>Contact</a>
        </NavLinks>
      </HeaderWrapper>
    </Scene>
  </Controller>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

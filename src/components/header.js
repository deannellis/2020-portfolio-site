import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  max-width: 100vw;
  border-bottom: 1px solid black;
  display: flex;
  flex-flow: space-between;
  align-items: center;
  a {
    text-decoration: none;
    background-image: none;
  }
  padding: 8px 36px;
`
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
  <HeaderWrapper>
    <h2 style={{ margin: 0 }}>
      <Link to="/">DEAN NELLIS</Link>
    </h2>
    <NavLinks>
      <a>Work</a>
      <a>About</a>
      <a>Contact</a>
    </NavLinks>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

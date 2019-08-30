import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import Header from "./header"
import "./global.css"
import { Controller, Scene } from 'react-scrollmagic';

const globalTheme = {
  magenta: '#F244C4',
  cyan: '#05AFF2',
  cyanLight: '#2EF2F2',
  yellow: '#F29F05',
  yellowLight: '#F2CB05',
  offWhite: '#F2F2F2',
  fadeInTrans: 'cubic-bezier(.25,.8,.25,1)',
  materialShadow2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  materialShadow3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
};

const Footer = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Controller>
        <Scene duration={600} classToggle={['.toggle-handle', 'not-scrolled']} indicators={false}>
          <div className="toggle-handle">
            <Header />
            <div>
              <main>{children}</main>
              <Footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </Footer>
            </div>
          </div>
        </Scene>
      </Controller>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

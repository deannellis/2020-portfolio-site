import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import Header from "./header";
import Footer from "./Footer";
import "./global.css";

const globalTheme = {
  magenta: "#F244C4",
  magentaOpacity60: "rgba(242, 68, 196, .6)",
  cyan: "#05AFF2",
  cyanLight: "#2EF2F2",
  cyanLightOpacity60: "rgba(46, 242, 242, .6)",
  yellow: "#F29F05",
  yellowOpacity60: "rgba(242, 159, 5, .6)",
  yellowLight: "#F2CB05",
  offWhite: "#F2F2F2",
  fadeInTrans: "cubic-bezier(.25,.8,.25,1)",
  popInTrans: "cubic-bezier(1, -0.65, 0, 2.31)",
  defaultTransition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
  materialShadow1:
    "0 1px 3px rgba(29, 29, 37, 0.12), 0 1px 2px rgba(29, 29, 37, 0.24)",
  materialShadow2:
    "0 3px 6px rgba(29, 29, 37, 0.16), 0 3px 6px rgba(29, 29, 37, 0.23)",
  materialShadow3:
    "0 10px 20px rgba(29, 29, 37, 0.19), 0 6px 6px rgba(29, 29, 37, 0.23)",
  footerShadow:
    "0 -10px 20px rgba(29, 29, 37, 0.04), 0 -6px 6px rgba(29, 29, 37, 0.05)",
  headerShadow:
    "0 10px 20px rgba(29, 29, 37, 0.05), 0 6px 6px rgba(29, 29, 37, 0.06)",
  xsSize: "0.5rem",
  sSize: "0.6rem",
  mSize: "0.8rem",
  lSize: "1.6rem",
  xlSize: "2.4rem",
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Controller>
        <Scene
          duration={600}
          classToggle={[".toggle-handle", "not-scrolled"]}
          indicators={false}
        >
          <div className="toggle-handle">
            <Header />
            <div>
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </Scene>
      </Controller>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

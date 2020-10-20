import React from "react";
import styled from "styled-components";

import { StyledButton } from "./styles/ButtonStyles";
import { PDFIcon } from "../utils/icons";
import resumePdf from "../PDFs/DeanNellis_Resume.pdf";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  section {
    width: 100%;
    padding: 0 ${props => props.theme.lSize} ${props => props.theme.lSize};
    @media (${props => props.theme.tabletLandscapeUp}) {
      padding: 0 0 ${props => props.theme.xlSize};

      width: 70vw;
    }
    p {
      width: 100%;
      @media (${props => props.theme.tabletLandscapeUp}) {
        width: 88%;
      }
    }
    a:hover {
      /* text-decoration: underline; */
    }
    a button:hover {
      text-decoration: none;
    }
  }
  #about {
    position: absolute;
    top: -80px;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <div id="about"></div>
      <section>
        <h2>About</h2>
        <p>
          Hi, I'm Dean. I have worn many hats over the years: UX researcher, UI
          designer, and graphic designer. I currently work at{" "}
          <a href="https://www.lexmark.com/">Lexmark</a> as a visual designer,
          creating attractive and intutive digital experiences for our
          customers.
          <br />
          <br />
          Over the past 3+ years, my passion has been cultivating my skills in
          web development. After buidling many sites and applications, I feel I
          am ready to take on the role of front-end developer.
        </p>
        <StyledButton outline>
          <a href={resumePdf} target="blank">
            <PDFIcon fill="#000" /> View Résumé
          </a>
        </StyledButton>
      </section>
    </AboutWrapper>
  );
};

export default About;

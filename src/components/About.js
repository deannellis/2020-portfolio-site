import React from "react";
import styled from "styled-components";

import { StyledButton } from "./styles/ButtonStyles";
import { PDFIcon } from "../utils/icons";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  section {
    padding: ${props => props.theme.mSize} 0 ${props => props.theme.xlSize};
    width: 70vw;
    p {
      width: 88%;
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
        <a href=""></a>
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
          <PDFIcon fill="#000" /> View Résumé
        </StyledButton>
      </section>
    </AboutWrapper>
  );
};

export default About;

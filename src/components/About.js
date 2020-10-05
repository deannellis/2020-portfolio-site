import React from "react";
import styled from "styled-components";

import { StyledButton } from "./styles/ButtonStyles";
import { PDFIcon } from "../utils/icons";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    padding: 1rem 0 2rem;
    width: 70vw;
    p {
      width: 88%;
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <section id="about">
        <h2>About</h2>
        <p>
          Hi, I'm Dean. I have worn many hats over the years: UX researcher, UI
          designer, and graphic designer. I currently work at Lexmark as a
          visual designer, creating attractive and intutive digital experiences
          for our customers.
          <br />
          <br />
          Over the past 3+ years, my passion has been cultivating my skills in
          web development. After buidling many sites and applications, I feel I
          am ready to wear the hat of front-end developer.
        </p>
        <StyledButton outline>
          <PDFIcon fill="#000" /> View Résumé
        </StyledButton>
      </section>
    </AboutWrapper>
  );
};

export default About;

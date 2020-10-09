import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { DiceRollerImage01 } from "../components/image-sharp/DiceRollerImages";
import rollingGif from "../gifs/DiceRolling64.gif";
import {
  ProjectWrapper,
  ProjectFooter,
} from "../components/styles/ProjectPageStyles";
import { StyledButton } from "../components/styles/ButtonStyles";
import { NextArrowIcon, LeaveSiteIcon, GitHubIcon } from "../utils/icons";
import { getNextProject } from "../utils/projectList";

const DiceRoller = ({ location }) => {
  const nextProject = getNextProject(location.pathname);
  return (
    <Layout>
      <SEO title="Dice Roller" />
      <ProjectWrapper>
        <section className="project-hero">
          <h1>Dice Roller: A virtual set of polyhedral dice</h1>
          <h5>Design / Front-End Development</h5>
          <div className="project-hero__buttons">
            <a href="https://dice-roller-applet.herokuapp.com/" target="blank">
              <StyledButton outline>
                <LeaveSiteIcon fill="#000000D6" size="18" />
                Visit the Website
              </StyledButton>
            </a>
            <a href="https://github.com/deannellis/dice-roller" target="blank">
              <StyledButton outline>
                <GitHubIcon fill="#000000D6" size="18" />
                Visit the GitHub Repo
              </StyledButton>
            </a>
          </div>
        </section>
        <section>
          <h3>Background</h3>
          <p>
            This project is one of the first things I created with React. It is
            a simple, fun, aesthetically pleasing set of virtual polyhedral
            dice. These dice are used for the roleplaying game, Dungeons &
            Dragons.
          </p>
        </section>
        <section>
          <h3>Static Comps</h3>
          <div className="project__comp" style={{ marginBottom: "5.6rem" }}>
            <aside>
              <h4>Mobile View</h4>
              {/* <p>
                Your dice are always on your phone
              </p> */}
            </aside>
            <div className="comp--mobile">
              <DiceRollerImage01 />
            </div>
          </div>
          <div className="project__comp">
            <aside>
              <h4>Animation</h4>
              <p>
                I chose to animate the dice using a combination of SVG sprites
                and CSS animations.
              </p>
            </aside>
            <div className="comp--mobile">
              <img src={rollingGif} alt="Sample animation of dice rolling" />
            </div>
          </div>
        </section>
      </ProjectWrapper>
      <ProjectFooter>
        <div className="footer__half">
          <h3>Technologies Used</h3>
          <ul>
            <li>
              <a href="https://reactjs.org/">React</a>
            </li>
            <li>
              <a href="https://webpack.js.org/">Webpack</a>
            </li>
            <li>Javascript ES6</li>
            <li>
              <a href="https://sass-lang.com/">Sass</a>
            </li>
          </ul>
        </div>
        <div className="footer__half">
          <Link to={nextProject.route}>
            <div>
              <span>Next Project</span>
              <NextArrowIcon fill="#000000D6" size="32" />
            </div>
            <img src={nextProject.image} alt="UPDATE DYNAMICALLY" />
          </Link>
        </div>
      </ProjectFooter>
    </Layout>
  );
};

export default DiceRoller;

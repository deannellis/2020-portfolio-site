import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import macroGif from "../gifs/flextRecordingR2-64-400.gif";
import {
  FlextImage01,
  FlextImage02,
  FlextImage03,
} from "../components/image-sharp/FlextImages";
import {
  ProjectWrapper,
  ProjectFooter,
} from "../components/styles/ProjectPageStyles";
import { StyledButton } from "../components/styles/ButtonStyles";
import { NextArrowIcon, LeaveSiteIcon, GitHubIcon } from "../utils/icons";
import { getNextProject } from "../utils/projectList";

const Flext = ({ location }) => {
  const nextProject = getNextProject(location.pathname);
  return (
    <Layout>
      <SEO title="Flext" />
      <ProjectWrapper>
        <section className="project-hero">
          <h1>Flext: a weight lifting companion app</h1>
          <h5>Design / UI/UX / Front-End Development</h5>
          <div className="project-hero__buttons">
            <StyledButton outline>
              <a href="https://flext-app.herokuapp.com/" target="blank">
                <LeaveSiteIcon fill="#000000D6" size="18" />
                Visit the Website
              </a>
            </StyledButton>
            <StyledButton outline>
              <a href="https://github.com/deannellis/flext" target="blank">
                <GitHubIcon fill="#000000D6" size="18" />
                Visit the GitHub Repo
              </a>
            </StyledButton>
          </div>
        </section>
        <section>
          <h3>Background</h3>
          <p>
            Flext is a single-page application that helps users create and
            maintain a weight lifting routine. This project uses{" "}
            <a href="https://d3js.org/">D3</a> to create intuitive, interactive
            visualizations of the user's data.
          </p>
        </section>
        <section>
          {/* <h3>Static Comps</h3> */}
          <div className="project__comp">
            <aside>
              <h4>Dashboard Page</h4>
              <p>
                The dashboard gives users a quick overview of:
                <ul>
                  <li>Their next workout</li>
                  <li>Past workouts</li>
                  <li>Daily macros consumed</li>
                </ul>
              </p>
            </aside>
            <FlextImage02 />
          </div>
          <div className="project__comp">
            <aside>
              <h4>Lifts Page</h4>
              <p>
                The lifts page allows users to visualize their gains over time
                for each lift.
              </p>
            </aside>
            <FlextImage01 />
          </div>
          <div className="project__comp">
            <aside>
              <h4>Mid-workout</h4>
              <p>
                Flext will tell you exactly how much weight to put on the bar
                for each set. Depending on your results, flext will
                automatically adjust your weight.
              </p>
            </aside>
            <FlextImage03 />
          </div>
          <div className="project__comp">
            <aside>
              <h4>Macro Visualization</h4>
            </aside>
            <div className="comp--mobile">
              <img
                src={macroGif}
                alt="Sample animation Macro Tracker visualization"
                width="352"
                style={{ objectFit: "contain" }}
              />
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
              <a href="https://redux.js.org/">Redux</a>
            </li>
            <li>
              <a href="https://d3js.org/">D3</a>
            </li>
            <li>
              <a href="http://firebase.google.com/">Firebase</a>
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

export default Flext;

import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Image from "../components/Image";
import {
  FlextImage01,
  FlextImage02,
} from "../components/image-sharp/FlextImages";
import {
  ProjectWrapper,
  ProjectFooter,
} from "../components/styles/ProjectPageStyles";
import { StyledButton } from "../components/styles/ButtonStyles";
import { NextArrowIcon, LeaveSiteIcon, GitHubIcon } from "../utils/icons";
import placeholderImage1 from "../images/nordwood-themes-ubIWo074QlU-unsplash.jpg";
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
              <LeaveSiteIcon fill="#000000D6" size="18" />
              <a href="https://flext-app.herokuapp.com/" target="blank">
                Visit the Website
              </a>
            </StyledButton>
            <StyledButton outline>
              <GitHubIcon fill="#000000D6" size="18" />
              <a href="https://github.com/deannellis/flext" target="blank">
                Visit the GitHub Repo
              </a>
            </StyledButton>
          </div>
        </section>
        <section>
          <h3>Background</h3>
          <p>
            Flext is a single-page application that I created to help users
            create and maintain a weight lifting routine. With this project, I
            wanted to put into practice some D3 data visualization skills that I
            had been working on.
          </p>
        </section>
        <section>
          <h3>Static Comps</h3>
          <div className="project__comp">
            <aside>
              <h4>Dashboard Page</h4>
              <p>Test</p>
            </aside>
            <FlextImage02 />
          </div>
          <div className="project__comp">
            <aside>
              <h4>Lifts Page</h4>
              <p>test</p>
            </aside>
            <FlextImage01 />
          </div>
        </section>
      </ProjectWrapper>
      <ProjectFooter>
        <div>
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
        <div>
          <span>Next Project</span>
          <NextArrowIcon fill="#000000D6" size="32" />
          <img src={nextProject.image} alt="UPDATE DYNAMICALLY" />
        </div>
      </ProjectFooter>
    </Layout>
  );
};

export default Flext;

import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  GourmandImage01,
  GourmandImage02,
  GourmandImage03,
} from "../components/image-sharp/GourmandImages";
import {
  ProjectWrapper,
  ProjectFooter,
} from "../components/styles/ProjectPageStyles";
import { StyledButton } from "../components/styles/ButtonStyles";
import { NextArrowIcon, LeaveSiteIcon, GitHubIcon } from "../utils/icons";
import { getNextProject } from "../utils/projectList";

const Gourmand = ({ location }) => {
  const nextProject = getNextProject(location.pathname);
  return (
    <Layout>
      <SEO title="Gourmand" />
      <ProjectWrapper>
        <section className="project-hero">
          <h1>Gourmand: where recipes live</h1>
          <h5>Design / UI/UX / Full Stack Development</h5>
          <div className="project-hero__buttons">
            <a href="https://gourmand-recipes.herokuapp.com/" target="blank">
              <StyledButton outline>
                <LeaveSiteIcon size="18" />
                Visit the Website
              </StyledButton>
            </a>
            <a href="https://github.com/deannellis/gourmand" target="blank">
              <StyledButton outline>
                <GitHubIcon size="18" />
                Visit the GitHub Repo
              </StyledButton>
            </a>
          </div>
        </section>
        <section>
          <h3>Background</h3>
          <p>
            Gourmand is a web app that allows users to save their favorite
            recipes and discover new ones, along with several helpful features.
          </p>
          <p>
            The back-end utilizes a REST API built with{" "}
            <a href="https://expressjs.com/">Express</a> to handle data
            manipulation and storage in{" "}
            <a href="https://www.mongodb.com/">MongoDB</a>. This is one of the
            most back-end intensive apps that I have built to date.
          </p>
        </section>
        <section>
          {/* <h3>Static Comps</h3> */}
          <div className="project__comp">
            <aside>
              <h4>Recipe Page</h4>
              <p>
                Easily reference your recipes or discover new recipes submitted
                by others.
              </p>
            </aside>
            <GourmandImage01 />
          </div>
          <div className="project__comp">
            <aside>
              <h4>Add Recipe Page</h4>
              <p>This simple and flexible form makes it easy to add recipes.</p>
            </aside>
            <GourmandImage02 />
          </div>
          <div className="project__comp">
            <aside>
              <h4>Shopping List</h4>
              <p>Users can easily add ingredients to their shopping list.</p>
            </aside>
            <div className="comp--mobile">
              <GourmandImage03 />
            </div>
          </div>
        </section>
      </ProjectWrapper>
      <ProjectFooter>
        <div className="footer__half">
          <h3>Technologies Used</h3>
          <ul>
            <li>
              <a href="https://expressjs.com/">Express</a>
            </li>
            <li>
              <a href="https://pugjs.org/">Pug</a>
            </li>
            <li>
              <a href="https://www.mongodb.com/">MongoDB</a>
            </li>
            <li>
              <a href="https://cloudinary.com/">Cloudinary</a>
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

export default Gourmand;

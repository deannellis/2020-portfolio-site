import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  ProjectWrapper,
  ProjectFooter,
} from "../components/styles/ProjectPageStyles";
import { NextArrowIcon } from "../utils/icons";
import { getNextProject } from "../utils/projectList";

const KineticType = ({ location }) => {
  const nextProject = getNextProject(location.pathname);
  return (
    <Layout>
      <SEO title="Kinetic Typography" />
      <ProjectWrapper>
        <section className="project-hero">
          <h1>Kinetic Typography: The Life Aquatic</h1>
          <h5>Motion Design</h5>
          <div className="project-hero__details">
            <p>Motion Design Overview | 2012</p>
          </div>
        </section>
        <section>
          <h3>Background</h3>
          <p>
            This kinetic typography animation samples audio from the film{" "}
            <em>The Life Aquatic with Steve Zissou</em>. This project
            demonstrates type in motion, creating dynamic compositions.
          </p>
        </section>
        <section>
          <div className="project__video-player">
            <iframe
              src="https://player.vimeo.com/video/85829969?color=ffffff"
              width="700"
              height="394"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              title="Kinetic Typography: The Life Aquatic"
            ></iframe>
          </div>
        </section>
      </ProjectWrapper>
      <ProjectFooter>
        <div className="footer__half">
          <h3>Technologies Used</h3>
          <ul>
            <li>
              <a href="https://www.adobe.com/products/aftereffects.html">
                After Effects
              </a>
            </li>
            <li>
              <a href="https://www.adobe.com/products/illustrator.html">
                Illustrator
              </a>
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

export default KineticType;

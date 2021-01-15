import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  CobLifeImage01,
  CobLifeImage02,
} from "../components/image-sharp/CobLifeImages";
import {
  ProjectWrapper,
  ProjectFooter,
} from "../components/styles/ProjectPageStyles";
import { StyledButton } from "../components/styles/ButtonStyles";
import { NextArrowIcon, LeaveSiteIcon, PDFIcon } from "../utils/icons";
import { getNextProject } from "../utils/projectList";
import processBook from "../PDFs/cobLife_ProcessBook.pdf";

const CobLife = ({ location }) => {
  const nextProject = getNextProject(location.pathname);
  return (
    <Layout>
      <SEO title="Cob Life" />
      <ProjectWrapper>
        <section className="project-hero">
          <h1>Cob Life</h1>
          <h5>Web Design / Research / Branding</h5>
          <div className="project-hero__buttons">
            <a href="https://deannellis.github.io/cob-life/" target="blank">
              <StyledButton outline>
                <LeaveSiteIcon size="18" />
                Visit the Website
              </StyledButton>
            </a>
            <a href={processBook} target="blank">
              <StyledButton outline>
                <PDFIcon size="20" />
                View Process Book
              </StyledButton>
            </a>
          </div>
        </section>
        <section>
          <h3>Background</h3>
          <p>
            Cob Life is a website that introduces cob and natural building
            methods, without assuming any previous knowledge on the topic. The
            site features cob houses, highlights the benefits, and helps
            visitors take steps toward building their own cob home.
          </p>
          <p>
            This project was the result of my capstone project. Students spent a
            semester researching and identifying a problem space. Then the
            following semester was spent designing, culminating in the final
            capstone project.
          </p>
        </section>
        <section>
          {/* <h3>Static Comps</h3> */}
          <div className="project__comp">
            <aside>
              <h4>Landing Page</h4>
              {/* <p>
                Easily reference your recipes or discover new recipes submitted
                by others.
              </p> */}
            </aside>
            <CobLifeImage01 />
          </div>
          <div className="project__comp">
            <aside>
              <h4>Why Cob?</h4>
              {/* <p>
                Easily reference your recipes or discover new recipes submitted
                by others.
              </p> */}
            </aside>
            <CobLifeImage02 />
          </div>
        </section>
      </ProjectWrapper>
      <ProjectFooter>
        <div className="footer__half">
          <h3>Technologies Used</h3>
          <ul>
            <li>
              <a href="https://www.adobe.com/products/illustrator.html">
                Illustrator
              </a>
            </li>
            <li>
              <a href="https://www.adobe.com/products/photoshop.html">
                Photoshop
              </a>
            </li>
            <li>HTML</li>
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

export default CobLife;

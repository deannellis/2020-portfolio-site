import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  CobLifeImage01,
  CobLifeImage02,
} from "../components/image-sharp/CobLifeImages";
import processBook from "../PDFs/cobLife_ProcessBook.pdf";
import Project from "../components/Project";

const CobLife = ({ location }) => {
  const projectButtons = [
    {
      href: "https://deannellis.github.io/cob-life/",
      icon: "leaveSite",
      label: "Visit the Website",
    },
    {
      href: processBook,
      icon: "PDF",
      label: "View Process Book",
    },
  ];
  const projectTechnologies = [
    {
      href: "https://www.adobe.com/products/illustrator.html",
      label: "Illustrator",
    },
    {
      href: "https://www.adobe.com/products/photoshop.html",
      label: "Photoshop",
    },
    {
      href: null,
      label: "HTML",
    },
    {
      href: "https://sass-lang.com/",
      label: "Sass",
    },
  ];
  return (
    <Layout>
      <SEO title="Cob Life" />
      <Project
        title="Cob Life"
        skills="Web Design / Research / Branding"
        details="Capstone Project | 2016"
        location={location}
        buttons={projectButtons}
        background={
          <>
            <p>
              Cob Life is a website that introduces cob and natural building
              methods, without assuming any previous knowledge on the topic. The
              site features cob houses, highlights the benefits, and helps
              visitors take steps toward building their own cob home.
            </p>
            <p>
              This project was the result of my capstone project. Students spent
              a semester researching and identifying a problem space. Then the
              following semester was spent designing, culminating in the final
              capstone project.
            </p>
          </>
        }
        technologies={projectTechnologies}
      >
        <div className="project__comp">
          <aside>
            <h4>Landing Page</h4>
          </aside>
          <CobLifeImage01 />
        </div>
        <div className="project__comp">
          <aside>
            <h4>Why Cob?</h4>
          </aside>
          <CobLifeImage02 />
        </div>
      </Project>
    </Layout>
  );
};

export default CobLife;

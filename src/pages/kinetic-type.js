import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Project from "../components/Project";

const KineticType = ({ location }) => {
  const projectTechnologies = [
    {
      href: "https://www.adobe.com/products/aftereffects.html",
      label: "After Effects",
    },
    {
      href: "https://www.adobe.com/products/illustrator.html",
      label: "Illustrator",
    },
  ];

  return (
    <Layout>
      <SEO title="Kinetic Typography" />
      <Project
        location={location}
        title="Kinetic Typography: The Life Aquatic"
        skills="Motion Design"
        buttons={[]}
        technologies={projectTechnologies}
        details="Motion Design Overview | 2012"
        background={
          <p>
            This kinetic typography animation samples audio from the film{" "}
            <em>The Life Aquatic with Steve Zissou</em>. This project
            demonstrates type in motion, creating dynamic compositions.
          </p>
        }
      >
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
      </Project>
    </Layout>
  );
};

export default KineticType;

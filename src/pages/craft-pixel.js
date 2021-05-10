import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Project from "../components/Project";
import {
  CraftPixelImage01,
  CraftPixelImage02,
  CraftPixelImage03,
} from "../components/image-sharp/CraftPixelImages";

const CraftPixel = ({ location }) => {
  const projectButtons = [
    {
      href: "https://www.craftpixel.co/",
      icon: "leaveSite",
      label: "Visit the Website",
    },
    {
      href: "https://github.com/crafter-dean/e-commerce-sample-site",
      icon: "gitHub",
      label: "Visit the GitHub Repo",
    },
  ];
  const projectTechnologies = [
    {
      href: "https://reactjs.org/",
      label: "React",
    },
    {
      href: "https://wordpress.com/",
      label: "WordPress",
    },
    {
      href: "https://graphql.org/",
      label: "GraphQL",
    },
    {
      href: "https://www.gatsbyjs.com/",
      label: "Gatsby",
    },
    {
      href: "https://sass-lang.com/",
      label: "Sass",
    },
  ];
  return (
    <Layout>
      <SEO title="Craft Pixel" />
      <Project
        title="Craft Pixel"
        skills="Front-end Development / Branding"
        details="Freelance | 2021"
        location={location}
        buttons={projectButtons}
        technologies={projectTechnologies}
        background={
          <p>
            Craft Pixel is an identity I put together for the freelance services
            I offer. The Craft Pixel site features a sample e-commerce site,
            complete with a fully functioning blog, store, and shopping cart.
            The website utilizes WordPress as a content management system.
          </p>
        }
      >
        <div className="project__comp">
          <aside>
            <h4>Sample Blog</h4>
          </aside>
          <CraftPixelImage01 />
        </div>
        <div className="project__comp">
          <aside>
            <h4>WordPress CMS</h4>
            <p>
              The site uses WordPress as a headless CMS. The WordPress data is
              transformed into a GraphQL API which is then consumed by Gatsby
              and generated into static pages.
            </p>
          </aside>
          <CraftPixelImage03 />
        </div>
        <div className="project__comp">
          <aside>
            <h4>Shopping Cart</h4>
            <p>
              The sample site features a fully functioning store with a shopping
              cart checkout experience powered by{" "}
              <a href="https://snipcart.com/">SnipCart</a>.
            </p>
          </aside>
          <CraftPixelImage02 />
        </div>
      </Project>
    </Layout>
  );
};

export default CraftPixel;

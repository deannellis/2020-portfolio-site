import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  GourmandImage01,
  GourmandImage02,
  GourmandImage03,
} from "../components/image-sharp/GourmandImages";
import Project from "../components/Project";

const Gourmand = ({ location }) => {
  const projectButtons = [
    {
      href: "https://gourmand-recipes.herokuapp.com/",
      icon: "leaveSite",
      label: "Visit the Website",
    },
    {
      href: "https://github.com/deannellis/gourmand",
      icon: "gitHub",
      label: "Visit the GitHub Repo",
    },
  ];
  const projectTechnologies = [
    {
      href: "https://expressjs.com/",
      label: "Express",
    },
    {
      href: "https://pugjs.org/",
      label: "Pug",
    },
    {
      href: "https://www.mongodb.com/",
      label: "MongoDB",
    },
    {
      href: "https://cloudinary.com/",
      label: "Cloudinary",
    },
    {
      href: null,
      label: "Javascript ES6",
    },
    {
      href: "https://sass-lang.com/",
      label: "Sass",
    },
  ];

  return (
    <Layout>
      <SEO title="Gourmand" />
      <Project
        location={location}
        title="Gourmand: where recipes live"
        skills="Design / UI/UX / Full Stack Development"
        details="Personal Development | 2019"
        buttons={projectButtons}
        technologies={projectTechnologies}
        background={
          <>
            <p>
              Gourmand is a web app that allows users to save their favorite
              recipes and discover new ones, along with several helpful
              features.
            </p>
            <p>
              The back-end utilizes a REST API built with{" "}
              <a href="https://expressjs.com/">Express</a> to handle data
              manipulation and storage in{" "}
              <a href="https://www.mongodb.com/">MongoDB</a>. This is one of the
              most back-end intensive apps that I have built to date.
            </p>
          </>
        }
      >
        <div className="project__comp">
          <aside>
            <h4>Recipe Page</h4>
            <p>
              Easily reference your recipes or discover new recipes submitted by
              others.
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
      </Project>
    </Layout>
  );
};

export default Gourmand;

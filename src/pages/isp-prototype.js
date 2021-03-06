import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  ISPImage01,
  ISPImage02,
  ISPImage03,
} from "../components/image-sharp/ISPImages";
import Project from "../components/Project";

const CobLife = ({ location }) => {
  const projectButtons = [
    {
      href: "https://ppr-prototype.herokuapp.com/",
      icon: "leaveSite",
      label: "Visit the Website",
    },
  ];
  const projectTechnologies = [
    {
      href: "https://reactjs.org/",
      label: "React",
    },
    {
      href: "https://redux.js.org/",
      label: "Redux",
    },
    {
      href: "https://webpack.js.org/",
      label: "Webpack",
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
      <SEO title="ISP Prototype" />
      <Project
        location={location}
        title="In-Store Publisher Prototype"
        skills="Front-End Development / Visual Design"
        details="Lexmark | 2019"
        buttons={projectButtons}
        technologies={projectTechnologies}
        background={
          <>
            <p>
              The In-Store Publisher is a web application that allows users to
              create, share, and print signage in retail stores. It is a part of{" "}
              <a
                href="https://www.lexmark.com/en_au/solutions/industry-solutions/retail/accessvia-print-and-digital-signage-solutions.html"
                target="blank"
              >
                a platform of signage management, SaaS products
              </a>
              .
            </p>
            <p>
              I provide visual design support for the development team
              responsible for creating modern, cloud-based implementations of
              the products. This involves recreating the front-end using our
              CommonUI: a shared library of UI components, coded in Angular.
            </p>
            <h3>Prototyping for User Testing</h3>
            <p>
              When recreating workflows in our CommonUI, I work closely with a
              UX specialist. We had recently done a major redesign of the print
              workflow, a key part of the experience. We wanted to test the new
              workflow. It was going to take some significant time to implement,
              at which point it might be too late to alter.
            </p>
            <p>
              The workflows were complex and would not be easily recreated with
              traditional prototyping tools. I proposed to create a prototype
              using React and Redux. I was able to create a prototype for user
              testing in a little over a month.
            </p>
            <p>
              This was one of my first projects with React, and a huge learning
              experience. Looking back on the code, I see many areas for
              improvement, if this were to be used in production. But as a quick
              and dirty prototype for user testing, I am very happy with what I
              was able to create.
            </p>
          </>
        }
      >
        <div className="project__comp">
          <aside>
            <h4>Home Page</h4>
            <p>The Home page surfaces commonly used actions.</p>
          </aside>
          <ISPImage01 />
        </div>
        <div className="project__comp">
          <aside>
            <h4>Create/Edit Form</h4>
            <p>
              This highly flexible edit form lets you cycle through signs in a
              batch, make edits and see live previews, and add new signs all
              from one page.
            </p>
          </aside>
          <ISPImage02 />
        </div>
        <div className="project__comp">
          <aside>
            <h4>Print Page</h4>
            <p>
              Once you've selected the signs to print, the print page groups
              signs by their paper type, and steps you through the printing
              process.
            </p>
          </aside>
          <ISPImage03 />
        </div>
      </Project>
    </Layout>
  );
};

export default CobLife;

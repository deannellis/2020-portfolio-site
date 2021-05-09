import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Project from "../components/Project";
import {
  KamiImage01,
  KamiImage02,
  KamiImage03,
} from "../components/image-sharp/KamiImages";

const Kami = ({ location }) => {
  const projectButtons = [
    {
      href: "https://friendly-gates-4fe84c.netlify.app/",
      icon: "leaveSite",
      label: "Visit the Website",
    },
    {
      href: "https://60876ffa514a8d002188dbcf-xctqpzojhf.chromatic.com/",
      icon: "leaveSite",
      label: "Visit the Storybook",
    },
    {
      href: "https://github.com/deannellis/kami",
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
      href: "https://redux.js.org/",
      label: "Redux",
    },
    {
      href: "https://www.typescriptlang.org/",
      label: "TypeScript",
    },
    {
      href: "https://storybook.js.org/",
      label: "Storybook",
    },
    {
      href: "https://www.snowpack.dev/",
      label: "Snowpack",
    },
    {
      href: "https://sass-lang.com/",
      label: "Sass",
    },
  ];

  return (
    <Layout>
      <SEO title="kami" />
      <Project
        title="Kami"
        skills="front-end development"
        location={location}
        buttons={projectButtons}
        technologies={projectTechnologies}
        background={
          <>
            <p>My goal with kami was threefold:</p>
            <ul>
              <li>
                To create a boilerplate project for future React applications
              </li>
              <li>
                To capture UI patterns I have implemeneted many times and
                provide a base design system that is easily adpated
              </li>
              <li></li>
              To try new technologies &amp; best practices
            </ul>
          </>
        }
      >
        <div className="project__comp">
          <aside>
            <h4>UI Components</h4>
            <p>
              Kami features a collection of UI components common to most
              projects
            </p>
          </aside>
          <KamiImage02 />
        </div>
        <div className="project__comp">
          <aside>
            <h4>Storybook</h4>
            <p>
              Kami is set up with{" "}
              <a href="https://storybook.js.org/">Storybook</a>: a great way to
              build and document UI components.
            </p>
          </aside>
          <KamiImage01 />
        </div>
        <div className="project__comp">
          <aside>
            <h4>Themeing</h4>
            <p>
              Kami uses css variables to let you adjust the UI theme. Easily
              change the UI density, accent color, and light/dark mode.
            </p>
          </aside>
          <KamiImage03 />
        </div>
      </Project>
    </Layout>
  );
};

export default Kami;

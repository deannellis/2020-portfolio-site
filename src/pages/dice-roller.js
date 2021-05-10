import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { DiceRollerImage01 } from "../components/image-sharp/DiceRollerImages";
import rollingGif from "../gifs/DiceRolling64.gif";
import Project from "../components/Project";

const DiceRoller = ({ location }) => {
  const projectButtons = [
    {
      href: "https://dice-roller-applet.herokuapp.com/",
      icon: "leaveSite",
      label: "Visit the Website",
    },
    {
      href: "https://github.com/deannellis/dice-roller",
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
      <SEO title="Dice Roller" />
      <Project
        location={location}
        title="Dice Roller: A virtual set of polyhedral dice"
        skills="DESIGN / FRONT-END DEVELOPMENT"
        details="Personal Development | 2018"
        buttons={projectButtons}
        technologies={projectTechnologies}
        background={
          <p>
            This project is a simple, fun, aesthetically pleasing set of virtual
            polyhedral dice. These dice are used for the roleplaying game,
            Dungeons &amp; Dragons. Never worry about leaving your dice at home
            again!
          </p>
        }
      >
        <div className="project__comp" style={{ marginBottom: "5.6rem" }}>
          <aside>
            <h4>Mobile View</h4>
          </aside>
          <div className="comp--mobile">
            <DiceRollerImage01 />
          </div>
        </div>
        <div className="project__comp">
          <aside>
            <h4>Animation</h4>
            <p>
              I chose to animate the dice using a combination of SVG sprites and
              CSS animations.
            </p>
          </aside>
          <div className="comp--mobile">
            <img src={rollingGif} alt="Sample animation of dice rolling" />
          </div>
        </div>
      </Project>
    </Layout>
  );
};

export default DiceRoller;

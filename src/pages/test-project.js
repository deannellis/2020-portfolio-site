import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { getNextProject } from "../utils/projectList";
import Project from "../components/Project";

const testButtons = [
  {
    href: "https://www.google.com/",
    icon: "leaveSite",
    label: "Leave Site",
  },
  {
    href: "https://www.google.com/",
    icon: "PDF",
    label: "PDF",
  },
  {
    href: "https://www.google.com/",
    icon: "gitHub",
    label: "GitHub",
  },
];
const testTechnologies = [
  {
    href: "https://www.google.com/",
    label: "GitHub",
  },
  {
    href: null,
    label: "GitHub",
  },
];

const TestProjectPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="Test Project" />
      <Project
        title="Test Project"
        skills="One / Two / Three"
        buttons={testButtons}
        background={
          <p>
            Test this business <a href="https://google.com">Test</a>
          </p>
        }
        technologies={testTechnologies}
        location={location}
      >
        <div className="project__comp">
          <aside>
            <h4>Landing Page</h4>
          </aside>
          <h1>Main Content</h1>
        </div>
      </Project>
    </Layout>
  );
};

export default TestProjectPage;

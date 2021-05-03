import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const TestProjectPage = () => {
  const nextProject = getNextProject(location.pathname);
  return (
    <Layout>
      <SEO title="Test Project" />
      <h1>Test</h1>
    </Layout>
  );
};

export default TestProjectPage;

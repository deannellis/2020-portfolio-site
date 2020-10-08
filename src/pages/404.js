import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import RedirectPageWrapper from "../components/styles/RedirectPageStyles";
import { FrownIcon } from "../utils/icons";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found :(" />
    <RedirectPageWrapper>
      <FrownIcon fill="#000" size={256} />
      <div>
        <h1>Page Not Found</h1>
        <p>This page does not exist... the sadness.</p>
        <Link to="/">&#8592; Go back to the homepage</Link>
      </div>
    </RedirectPageWrapper>
  </Layout>
);

export default NotFoundPage;

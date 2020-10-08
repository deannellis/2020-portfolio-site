import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import RedirectPageWrapper from "../components/styles/RedirectPageStyles";
import { SmileIcon, WinkIcon } from "../utils/icons";

const SuccessPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Layout>
      <SEO title="Thanks for your message!" />
      <RedirectPageWrapper>
        <span
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <WinkIcon fill="#000" size={256} />
          ) : (
            <SmileIcon fill="#000" size={256} />
          )}
        </span>
        <div>
          <h1>Thanks for reaching out!</h1>
          <p>Your message has been sent. Talk to you soon.</p>
          <Link to="/">&#8592; Go back to the homepage</Link>
        </div>
      </RedirectPageWrapper>
    </Layout>
  );
};

export default SuccessPage;

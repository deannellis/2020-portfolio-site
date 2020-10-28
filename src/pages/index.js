import React, { useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Headline from "../components/Headline";
import Cards from "../components/Cards";
import About from "../components/About";
import ContactForm from "../components/ContactForm";

const IndexPage = ({ location }) => {
  useEffect(() => {
    if (location.hash !== "") {
      const anchor = location.hash.substring(1);
      if (anchor === "work" || anchor === "contact" || anchor === "about") {
        document.getElementById(anchor).scrollIntoView({ behavior: "smooth" });
      }
    }
  });
  return (
    <Layout>
      <SEO title="Home" />
      <Headline />
      <Cards />
      <About />
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;

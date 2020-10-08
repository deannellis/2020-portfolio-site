import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Headline from "../components/Headline";
import Cards from "../components/Cards";
import About from "../components/About";
import ContactForm from "../components/ContactForm";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Headline />
    <Cards />
    <About />
    <ContactForm />
  </Layout>
);

export default IndexPage;

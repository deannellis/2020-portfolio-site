import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Headline from "../components/Headline"
import Cards from "../components/Cards"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Headline />
    <Cards />
  </Layout>
)

export default IndexPage

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query ISPImageQuery {
          ISPImage01: file(relativePath: { eq: "ISP_screencap_01.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ISPImage02: file(relativePath: { eq: "ISP_screencap_02.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ISPImage03: file(relativePath: { eq: "ISP_screencap_03.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

export const ISPImage01 = withImageData(props => (
  <Img fluid={props.imageData.ISPImage01.childImageSharp.fluid} />
));

export const ISPImage02 = withImageData(props => (
  <Img fluid={props.imageData.ISPImage02.childImageSharp.fluid} />
));

export const ISPImage03 = withImageData(props => (
  <Img fluid={props.imageData.ISPImage03.childImageSharp.fluid} />
));

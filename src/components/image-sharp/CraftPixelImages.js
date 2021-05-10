import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
  return (props) => (
    <StaticQuery
      query={graphql`
        query CraftPixelImageQuery {
          craftPixelImage01: file(
            relativePath: { eq: "CraftPixel_screencap_01.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          craftPixelImage02: file(
            relativePath: { eq: "CraftPixel_screencap_02.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          craftPixelImage03: file(
            relativePath: { eq: "CraftPixel_screencap_03.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

export const CraftPixelImage01 = withImageData((props) => (
  <Img fluid={props.imageData.craftPixelImage01.childImageSharp.fluid} />
));

export const CraftPixelImage02 = withImageData((props) => (
  <Img fluid={props.imageData.craftPixelImage02.childImageSharp.fluid} />
));

export const CraftPixelImage03 = withImageData((props) => (
  <Img fluid={props.imageData.craftPixelImage03.childImageSharp.fluid} />
));

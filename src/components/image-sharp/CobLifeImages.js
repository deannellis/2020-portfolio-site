import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query CobLifeImageQuery {
          cobLifeImage01: file(
            relativePath: { eq: "CobLife_screencap_01.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          cobLifeImage02: file(
            relativePath: { eq: "CobLife_screencap_02.png" }
          ) {
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

export const CobLifeImage01 = withImageData(props => (
  <Img fluid={props.imageData.cobLifeImage01.childImageSharp.fluid} />
));

export const CobLifeImage02 = withImageData(props => (
  <Img fluid={props.imageData.cobLifeImage02.childImageSharp.fluid} />
));

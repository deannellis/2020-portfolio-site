import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query GourmandImageQuery {
          gourmandImage01: file(
            relativePath: { eq: "Gourmand_screencap_03.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gourmandImage02: file(
            relativePath: { eq: "Gourmand_screencap_04.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gourmandImage03: file(
            relativePath: { eq: "Gourmand_screencap_05.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 822) {
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

export const GourmandImage01 = withImageData(props => (
  <Img fluid={props.imageData.gourmandImage01.childImageSharp.fluid} />
));

export const GourmandImage02 = withImageData(props => (
  <Img fluid={props.imageData.gourmandImage02.childImageSharp.fluid} />
));

export const GourmandImage03 = withImageData(props => (
  <Img fluid={props.imageData.gourmandImage03.childImageSharp.fluid} />
));

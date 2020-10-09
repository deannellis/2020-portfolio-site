import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query DiceRollerImageQuery {
          diceRollerImage01: file(
            relativePath: { eq: "DiceRoller_screencap_01.png" }
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

export const DiceRollerImage01 = withImageData(props => (
  <Img fluid={props.imageData.diceRollerImage01.childImageSharp.fluid} />
));

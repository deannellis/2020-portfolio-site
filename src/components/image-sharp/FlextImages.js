import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query ImageQuery {
          flextImage01: file(relativePath: { eq: "flext_screencap_01.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          flextImage02: file(relativePath: { eq: "flext_screencap_02.png" }) {
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

export const FlextImage01 = withImageData(props => (
  <Img fluid={props.imageData.flextImage01.childImageSharp.fluid} />
));

export const FlextImage02 = withImageData(props => (
  <Img fluid={props.imageData.flextImage02.childImageSharp.fluid} />
));

// export const FlextImage01 = () => {
//   const imageData = useStaticQuery(graphql`
//     query {
//       file(relativePath: { regex: "/flext_screencap_01/" }) {
//         childImageSharp {
//           fluid(maxWidth: 1000) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `);
//   return <Img fluid={imageData.file.childImageSharp.fluid} />;
// };

// export const FlextImage02 = () => {
//   const imageData = useStaticQuery(graphql`
//     query {
//       file(relativePath: { regex: "/flext_screencap_02/" }) {
//         childImageSharp {
//           fluid(maxWidth: 1000) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `);
//   return <Img fluid={imageData.file.childImageSharp.fluid} />;
// };

import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #00000052;
  section {
    padding: 1rem 0 2rem;
    width: 70vw;
    p {
      margin-right: 1rem;
    }
    .gatsby-image-wrapper {
      box-shadow: ${props => props.theme.materialShadow2};
      flex-grow: 1;
    }
    .project__comp {
      display: flex;
      margin-top: 1rem;
      aside {
        min-width: 30%;
        margin: 0 1rem 0 0;
      }
      h4 {
        margin-top: 0;
        opacity: 0.84;
      }
      p {
        opacity: 0.74;
      }
      &:nth-child(odd) {
        flex-direction: row-reverse;
        aside {
          margin: 0 0 0 1rem;
        }
      }
    }
  }
  section.project-hero {
    h5 {
      text-transform: uppercase;
      color: ${props => props.theme.magenta};
    }
    border-bottom: 1px solid #000;
    button {
      margin-top: 0.8rem;
    }
    .project-hero__buttons {
      display: flex;
      button {
        margin-right: 0.8rem;
      }
    }
  }
`;

export const ProjectFooter = styled.section`
  display: flex;
  align-items: stretch;
  align-content: stretch;
  div {
    width: 50%;
    display: flex;
    padding: 2rem 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a {
    color: #000;
    text-shadow: none;
    text-decoration: none;
  }
  div:nth-child(odd) {
    background: ${props => props.theme.cyanLight};
    align-items: flex-start;
  }
  div:nth-child(even) {
    padding: 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    /* span,
    svg {
      z-index: 1;
      text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff;
      font-weight: 600;
    } */
    img {
      position: absolute;
      transition: all 0.3s !important;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 0;
      object-fit: cover;
      height: 100%;
      opacity: 0;
    }
    &:hover {
      img {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
`;

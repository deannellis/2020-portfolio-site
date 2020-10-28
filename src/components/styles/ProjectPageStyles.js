import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #00000052;
  scroll-behavior: auto;
  section {
    padding: ${props => props.theme.sSize} 0 ${props => props.theme.sSize};
    width: 84vw;
    @media (${props => props.theme.tabletLandscapeUp}) {
      padding: ${props => props.theme.sSize} 0 ${props => props.theme.mSize};
      width: 70vw;
    }
    p {
      padding-right: ${props => props.theme.xlSize};
    }
    .gatsby-image-wrapper {
      box-shadow: ${props => props.theme.materialShadow2};
      flex-grow: 1;
    }
    .project__video-player {
      display: flex;
      justify-content: center;
    }
    .project__comp {
      display: flex;
      flex-direction: column;
      @media (${props => props.theme.tabletLandscapeUp}) {
        flex-direction: row;
      }
      margin: ${props => props.theme.xlSize} 0 3.2rem;
      aside {
        @media (${props => props.theme.tabletLandscapeUp}) {
          min-width: 30%;
          max-width: 32%;
        }
        margin: 0 ${props => props.theme.mSize} 0 0;
      }
      h4 {
        margin-top: 0;
      }
      h4,
      p {
        opacity: 0.74;
      }
      .comp--mobile {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        .gatsby-image-wrapper {
          max-width: 384px;
          border-radius: 32px;
          border: 8px solid #000000bd;
          box-shadow: ${props => props.theme.materialShadow3};
        }
      }
      &:nth-child(odd) {
        @media (${props => props.theme.tabletLandscapeUp}) {
          flex-direction: row-reverse;
        }
        aside {
          margin: 0 0 0 ${props => props.theme.mSize};
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
      margin-top: ${props => props.theme.mSize};
    }
    .project-hero__buttons {
      display: flex;
      flex-direction: column;
      @media (${props => props.theme.tabletLandscapeUp}) {
        flex-direction: row;
      }
      button {
        margin-right: ${props => props.theme.mSize};
      }
    }
    .project-hero__details {
      opacity: 0.8;
      font-size: 0.9rem;
    }
  }
`;

export const ProjectFooter = styled.section`
  display: flex;
  align-items: stretch;
  align-content: stretch;
  flex-direction: column;
  @media (${props => props.theme.tabletLandscapeUp}) {
    flex-direction: row;
  }
  .footer__half {
    width: 100%;
    @media (${props => props.theme.tabletLandscapeUp}) {
      width: 50%;
    }
    min-height: 24rem;
    display: flex;
    padding: ${props => props.theme.lSize} ${props => props.theme.xlSize};
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
    justify-content: flex-start;
    a {
      text-decoration: underline;
      text-decoration-color: #000000a3;
    }
  }
  div:nth-child(even) {
    padding: 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    div {
      display: flex;
      background: #fff;
      flex-direction: column;
      align-items: center;
    }
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

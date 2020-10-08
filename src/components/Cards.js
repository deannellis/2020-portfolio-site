import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { projectList } from "../utils/projectList";

const CardsWrapper = styled.section`
  background: ${props => props.theme.offWhite};
  padding: ${props => props.theme.lSize};
  position: relative;
  .cards {
    margin: 0 auto;
    max-width: 70%;
    display: grid;
    grid-gap: ${props => props.theme.lSize};
    grid-template-columns: 1fr 1fr 1fr;
  }
  #work {
    position: absolute;
    top: -80px;
  }
`;

const Card = styled(Link)`
  background: #fff;
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: all 0.3s !important;
  }
  &:hover {
    &:after {
      opacity: 1;
    }
    img {
      transform: scale(1.1);
      filter: blur(2px);
    }
  }
  &:after {
    transition: opacity 0.4s;
    transition-timing-function: ${props => props.theme.fadeInTrans};
    content: attr(title);
    color: #fff;
    background: ${props => props.theme.magentaOpacity60};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:nth-child(3n-1) {
    &:after {
      background: ${props => props.theme.cyanLightOpacity60};
    }
  }
  &:nth-child(3n) {
    &:after {
      background: ${props => props.theme.yellowOpacity60};
    }
  }
`;

const Cards = () => {
  return (
    <CardsWrapper style={{ minHeight: "700px" }}>
      <div id="work"></div>
      <div className="cards">
        {projectList.map(project => (
          <Card title={project.title} to={project.route}>
            <img src={project.image} alt={project.title} />
          </Card>
        ))}
      </div>
    </CardsWrapper>
  );
};

export default Cards;

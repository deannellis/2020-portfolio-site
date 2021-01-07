import React, { Component } from "react";
import styled from "styled-components";

const HeadlineWrap = styled.div`
  display: flex;
  height: calc(80vh - 100px);
  @media (${props => props.theme.tabletLandscapeUp}) {
    height: calc(100vh - 100px);
  }
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 200vmin;
  text-align: center;
  h1,
  h2 {
    margin: ${props => props.theme.sSize};
  }
  h1.headline__before,
  h2 {
    opacity: 0.82;
    margin-bottom: 0;
  }
  h2 {
    margin-bottom: 3.6rem;
  }
`;

const HeadlineText = styled.h1.attrs(props => ({
  yellowX: props.yellowX,
  yellowY: props.yellowY,
  cyanX: props.cyanX,
  cyanY: props.cyanY,
}))`
  font-size: 80px;
  @media (${props => props.theme.tabletLandscapeUp}) {
    font-size: 180px;
  }
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  color: magenta;
  background-blend-mode: screen;
  :before,
  :after {
    display: block;
    content: "DEAN NELLIS";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    mix-blend-mode: multiply;
    background-blend-mode: screen;
    transform-origin: center;
    transform-style: preserve-3d;
  }
  :before {
    color: yellow;
    transform: translateX(${props => props.yellowX})
      translateY(${props => props.yellowY});
  }
  :after {
    color: cyan;
    transform: translateX(${props => props.cyanX})
      translateY(${props => props.cyanY});
  }
`;
class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cyanX: 1,
      cyanY: 1,
      yellowX: 1,
      yellowY: 1,
      mouseX: undefined,
      mouseY: undefined,
      timedOut: false,
    };
  }

  getOffset = (position, direction) => {
    const offset = (position / direction - 0.5) * 4;
    return offset;
  };
  clampTransform = value => {
    if (value > 2) {
      return 2;
    } else if (value < -2) {
      return -2;
    } else {
      return value;
    }
  };

  move = ev => {
    const x = ev.clientX;
    const y = ev.clientY;
    const { innerHeight: height, innerWidth: width } = window;
    const bX = this.getOffset(x, width);
    const bY = this.getOffset(y, height);
    const aX = 0 - bX;
    const aY = 0 - bY;
    const wait = 80;
    if (this.state.mouseX === undefined || this.state.mouseY === undefined) {
      this.setState({
        mouseX: x,
        mouseY: y,
      });
    } else {
      if (!this.state.timedOut) {
        this.setState({ cyanX: `${aX}%` });
        this.setState({ yellowX: `${bX}%` });
        this.setState({ cyanY: `${aY}%` });
        this.setState({ yellowY: `${bY}%` });
        this.setState({ timedOut: true });
        setTimeout(() => {
          this.setState({ timedOut: false });
        }, wait);
      }
    }
  };

  render() {
    return (
      <>
        <HeadlineWrap onMouseMove={this.move}>
          <h1 className="headline__before">Hi, I'm</h1>
          <HeadlineText
            cyanX={this.state.cyanX}
            cyanY={this.state.cyanY}
            yellowX={this.state.yellowX}
            yellowY={this.state.yellowY}
          >
            DEAN NELLIS
          </HeadlineText>
          <h2>a front-end developer & UI/UX designer</h2>
        </HeadlineWrap>
      </>
    );
  }
}

export default Headline;

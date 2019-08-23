import React, { Component } from "react"
import styled from "styled-components"
// import AwesomeDebouncePromise from "awesome-debounce-promise"

const HeadlineWrap = styled.div`
  display: flex;
  height: 800px;
  width: 100%;
  justify-content: center;
  align-items: center;
  perspective: 200vmin;
  text-align: center;
`

const HeadlineText = styled.h1.attrs(props => ({
  yellowX: props.yellowX,
  yellowY: props.yellowY,
  cyanX: props.cyanX,
  cyanY: props.cyanY,
}))`
  font-size: 180px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: rotateX(20deg);
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
`
class Headline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cyanX: 1,
      cyanY: 1,
      yellowX: 1,
      yellowY: 1,
      title: "DEAN NELLIS",
      mouseX: undefined,
      mouseY: undefined,
    }
  }

  getOffset = (position, direction) => {
    return (position / direction - 0.5) * 4
  }

  move = ev => {
    const x = ev.screenX
    const y = ev.screenY
    const { innerHeight: height, innerWidth: width } = window
    const bX = this.getOffset(x, width)
    const bY = this.getOffset(y, height)
    const aX = 0 - bX
    const aY = 0 - bY
    let timedOut = false
    const wait = 250
    if (this.state.mouseX == undefined || this.state.mouseY == undefined) {
      this.setState({
        mouseX: x,
        mouseY: y,
      })
    } else {
      if (!timedOut) {
        this.setState({ cyanX: `${aX}%` })
        this.setState({ yellowX: `${bX}%` })
        this.setState({ cyanY: `${aY}%` })
        this.setState({ yellowY: `${bY}%` })
        timedOut = true
        setTimeout(() => {
          timedOut = false
        }, wait)
      }
      // if (x > this.state.mouseX + diff || x < this.state.mouseX - diff) {
      //   this.setState({ cyanX: `${aX}%` })
      //   this.setState({ yellowX: `${bX}%` })
      // }
      // if (y > this.state.mouseY + diff || y < this.state.mouseY - diff) {
      //   this.setState({ cyanY: `${aY}%` })
      //   this.setState({ yellowY: `${bY}%` })
      // }
      // this.setState({ cyanX: `${aX}%` })
      // this.setState({ yellowX: `${bX}%` })
      // this.setState({ cyanY: `${aY}%` })
      // this.setState({ yellowY: `${bY}%` })
    }
  }

  debounce = fn => {
    let frame

    return (...params) => {
      if (frame) {
        cancelAnimationFrame(frame)
      }
      frame = requestAnimationFrame(() => {
        fn(...params)
      })
    }
  }

  render() {
    return (
      <HeadlineWrap onMouseMove={this.move}>
        <HeadlineText
          cyanX={this.state.cyanX}
          cyanY={this.state.cyanY}
          yellowX={this.state.yellowX}
          yellowY={this.state.yellowY}
          title={this.state.title}
        >
          DEAN NELLIS
        </HeadlineText>
      </HeadlineWrap>
    )
  }
}

export default Headline

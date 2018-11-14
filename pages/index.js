import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeRight = keyframes`
  0% {
    margin-left: -800px;
  }
  100% {
    margin-left: 0;
  }
`
const fadeLeft = keyframes`
  0% {
    margin-right: -8000px;
  }
  100% {
    margin-right: 0;
  }
`
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
`
const Intro = styled.div`
  .big-text {
    opacity: 0;
    /* margin-left: -800px; */
    font-size: 7rem;
    max-width: 80vw;
  }

  .fade-right {
    animation: 1s 0.2s forwards ${fadeIn};
  }

  .fade-left {
    animation: 1s 0.2s forwards ${fadeIn};
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .big-text {
      font-size: 4rem;
      text-align: center;
    }
  }
`
class Index extends React.Component {
  state = {
    animate: false
  }

  componentDidMount() {
    this.setState({
      animate: true
    })
  }

  render() {
    const { animate } = this.state
    return (
      <Wrapper>
        <Intro>
          <h1 className={`big-text ${animate ? 'fade-right' : ''}`}>
            Hi I'm Yongelee.
          </h1>
          <h1 className={`big-text ${animate ? 'fade-left' : ''}`}>
            I'm a web developer specializing with React and Node.
          </h1>
        </Intro>
      </Wrapper>
    )
  }
}

export default Index

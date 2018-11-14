import React from 'react'
import styled, { keyframes } from 'styled-components'
import css_logo from '../static/img/css_logo.svg'
import html_logo from '../static/img/html_logo.svg'
import js_logo from '../static/img/js_logo.svg'

const ToolData = [
  [
    {
      name: 'HTML',
      img: `${html_logo}`
    },
    {
      name: 'CSS',
      img: `${css_logo}`
    },
    {
      name: 'Javascript',
      img: `${js_logo}`
    }
  ]
]

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
  @media (max-width: 800px) {
    text-align: center;
  }
`
const Intro = styled.div`
  min-height: 90vh;

  .big-text {
    opacity: 0;
    font-size: 7rem;
    max-width: 80vw;
  }

  .fade-in {
    animation: 1s 0.2s forwards ${fadeIn};
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .big-text {
      font-size: 4rem;
    }
  }
`
const Tools = styled.section`
  .heading {
    font-size: 4rem;
    border-bottom: 3px solid;
  }

  @media (max-width: 800px) {
    .heading {
      font-size: 3rem;
    }
  }
`
const Row = styled.div`
  width: 100%;
  height: 300px;
  padding: 0 1rem;
  border: 5px solid orange;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr;
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
          <h1 className={`big-text ${animate ? 'fade-in' : ''}`}>
            Hi I'm Yongelee.
          </h1>
          <h1 className={`big-text ${animate ? 'fade-in' : ''}`}>
            I'm a web developer specializing with React and Node.
          </h1>
        </Intro>
        <Tools>
          <h2 className={`heading`}>My tools of choice:</h2>
          <Row>
            {ToolData[0].map((tool, i) => (
              <ToolCard key={i} data={tool} />
            ))}
          </Row>
          <Row>{/* <ToolCard /> */}</Row>
        </Tools>
      </Wrapper>
    )
  }
}

const ToolCont = styled.div`
  height: 300px;
  margin: 1rem;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
  img {
    max-width: 100%;
    height: auto;
  }
`

const ToolCard = ({ data }) => (
  <ToolCont>
    <p>{data.name}</p>
    <img src={data.img} />
  </ToolCont>
)

export default Index

import React from 'react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import css_logo from '../static/img/css_logo.svg'
import html_logo from '../static/img/html_logo.svg'
import js_logo from '../static/img/js_logo.svg'
import graphql_logo from '../static/img/GraphQL_Logo.svg'
import redux_logo from '../static/img/redux_logo.svg'
import react_logo from '../static/img/react-logo.svg'
import node_logo from '../static/img/node_logo.svg'

const ToolData = [
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
  },
  {
    name: 'Node',
    img: `${node_logo}`
  },
  {
    name: 'React',
    img: `${react_logo}`
  },
  {
    name: 'Redux',
    img: `${redux_logo}`
  },
  {
    name: 'GraphQL',
    img: `${graphql_logo}`
  }
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
  section {
    margin-bottom: 20rem;
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 800px) {
    text-align: center;
    section {
      margin-bottom: 10rem;
      p {
        text-align: left;
      }
      li {
        text-align: left;
      }
    }
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
const Heading = styled.h2`
  font-size: 4rem;
  border-bottom: 3px solid;
  @media (max-width: 800px) {
    .heading {
      font-size: 3rem;
    }
  }
`
const Row = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Tools = styled.section``
const AboutMe = styled.section`
  a {
    margin-top: 2rem;
    border: 3px solid ${props => props.theme.yellow};
    color: ${props => props.theme.yellow};
    font-size: 3rem;
    padding: 2rem;
    border-radius: 7px;
    background-color: ${props => props.theme.black};
  }
`
const Work = styled.section`
  a {
    margin-top: 2rem;
    border: 3px solid ${props => props.theme.yellow};
    color: ${props => props.theme.yellow};
    font-size: 3rem;
    padding: 2rem;
    border-radius: 7px;
    background-color: ${props => props.theme.black};
  }
`
const Content = styled.section`
  a {
    margin-top: 2rem;
    border: 3px solid ${props => props.theme.yellow};
    color: ${props => props.theme.yellow};
    font-size: 3rem;
    padding: 2rem;
    border-radius: 7px;
    background-color: ${props => props.theme.black};
  }
`
const Service = styled.section`
  a {
    margin-top: 2rem;
    border: 3px solid ${props => props.theme.yellow};
    color: ${props => props.theme.yellow};
    font-size: 3rem;
    padding: 2rem;
    border-radius: 7px;
    background-color: ${props => props.theme.black};
  }
  li {
    font-size: 2rem;
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
          <h1 className={`big-text ${animate ? 'fade-in' : ''}`}>
            Hi I'm Yongelee.
          </h1>
          <h1 className={`big-text ${animate ? 'fade-in' : ''}`}>
            I'm a web developer specializing with React and Node.
          </h1>
        </Intro>
        <Tools>
          <Heading>My tools of choice:</Heading>
          <Row>
            {ToolData.map((tool, i) => (
              <ToolCard key={i} data={tool} />
            ))}
          </Row>
        </Tools>
        <AboutMe>
          <Heading>About me:</Heading>
          <p>
            Hi there! I’m a creative, open minded, non-conformist who loves to
            create and explore the world. I’m constantly looking for new things
            to learn, to experience, to try out and see with my own eyes.{' '}
          </p>
          <p>
            At the moment, the world of coding, startups, future & present
            technology, and travel is what captivates my attention the most.
          </p>
          <p>
            To learn more about me and how my journey began in 2012 after a
            fateful encounter with a stranger click below…
          </p>
          <br />
          <Link href="/about">
            <a>Learn More</a>
          </Link>
        </AboutMe>
        <Work>
          <Heading>Work & Portfolio:</Heading>
          <br />
          <Link href="/portfolio">
            <a>See More</a>
          </Link>
        </Work>
        <Content>
          <Heading>Blog & Articles:</Heading>
          <p>
            Check out my blog where I post my writings about web development,
            startups, UI/UX, and more!
          </p>
          <br />
          <Link href="/blog">
            <a>See More</a>
          </Link>
        </Content>
        <Service>
          <Heading>My Services:</Heading>
          <p>I have a particular set of services...these include:</p>
          <ul>
            <li>Full stack development with Javascript.</li>
            <li>
              Technical consultation about web development, hiring coders, and
              implementation of ideas.
            </li>
            <li>
              Personalized curriculum development for becoming skilled at modern
              web development, freelancing or starting a software business.
            </li>
            <li>More services depending on your needs, contact me!</li>
          </ul>
          <br />
          <Link href="https://albertkim1.typeform.com/to/jpiT5P">
            <a target="_blank">Contact me!</a>
          </Link>
        </Service>
      </Wrapper>
    )
  }
}

const ToolCont = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    img {
      width: 75px;
      height: 75px;
    }
  }
`

const ToolCard = ({ data }) => (
  <ToolCont>
    <p>{data.name}</p>
    <img src={data.img} />
  </ToolCont>
)

export default Index

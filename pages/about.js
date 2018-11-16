import Link from 'next/link'
import styled from 'styled-components'
import medium_logo from '../static/img/medium_logo.png'
import twitter_logo from '../static/img/twitter_logo.svg'

const Wrapper = styled.div`
  min-height: 100vh;
`
const Intro = styled.section`
  h1 {
    font-size: 5rem;
  }
  .logos {
    display: flex;
    img {
      width: auto;
      max-height: 50px;
    }
    a {
      padding-right: 2rem;
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    .logos {
      img {
        max-height: 30px;
      }
    }
  }
`
const Content = styled.section`
  p {
    font-size: 2.5rem;
  }
  a {
    margin-top: 2rem;
    margin-right: 3rem;
    border: 3px solid ${props => props.theme.yellow};
    color: ${props => props.theme.yellow};
    font-size: 3rem;
    padding: 2rem;
    border-radius: 7px;
    background-color: ${props => props.theme.black};
  }
`

const About = () => (
  <Wrapper>
    <Intro>
      <h1>About Yongelee</h1>
      <div className="logos">
        <a href="https://www.twitter.com/yongelee_" target="_blank">
          <img src={`${twitter_logo}`} />
        </a>
        <a href="https://medium.com/@yongelee" target="_blank">
          <img src={`${medium_logo}`} />
        </a>
      </div>
    </Intro>
    <br />
    <Content>
      <p>
        My journey begins in Q1 2012 on campus at Ryerson University. I, a young
        man, am lost, thinking about my career, thinking about my future. I’m
        studying psychology but I have no intentions of becoming a doctor or
        therapist.
      </p>
      <p>I'm walking through Jorgenson Hall.</p>
      <p>
        In the corner of my eye I see a banner for Seneca College advertising to
        lost souls and a desk set up with a man looking bored. There is no one
        else around, the only two souls on that floor are us.
      </p>
      <p>I walk past the set-up, barely noticing that it’s there.</p>
      <p>
        In my mind I think to myself, “Wait a minute, I’m looking for something
        to do with my life, I may as well talk with the man?”
      </p>
      <p>I head over to the stall and acknowledge the bored man’s existence.</p>
      <p>He asks me what I’m looking for.</p>
      <p>I tell him I’m looking for a job.</p>
      <p>He lights up, like now he has a reason to be there. </p>
      <p>
        “Well one industry that didn’t get hurt by the recession in 2008 was the
        IT industry, it even grew during the recession.”
      </p>
      <p>
        My mind activates, this makes so much sense. I could totally work in
        technology.
      </p>
      <p>
        He hands me a pamphlet about Seneca’s courses. I thank the man and walk
        away with a new sense of possibilities, a new sense of hope.
      </p>
      <p>
        At home I read through the pamphlet and the words “Software Development”
        pop up at me. At that moment I decided I was going to be a software
        developer and my journey of learning to code and building applications
        began.
      </p>
      <p>
        Today I am now a specialist with modern web development tools,
        particularity with Node and React and everything surrounding those two
        tools.
      </p>
      <p>
        My dream is to own multiple businesses that are operated online with a
        globally distributed team.{' '}
      </p>
      <p>
        My current goal is to simply get paid to write code remotely. This
        enables many other opportunities in life such as traveling the world,
        building other skill sets, working on other creative ventures, and
        meeting great people.
      </p>
      <p>
        If this sounds great to you and you’re interested in working with me
        either as a partner or employer, I’m always open to new opportunities!
      </p>
      <br />
      <Link href="https://albertkim1.typeform.com/to/jpiT5P">
        <a target="_blank">Contact Me!</a>
      </Link>
      <br />
      <br />
      <br />
      <Link href="/portfolio">
        <a>My Portfolio</a>
      </Link>
    </Content>
  </Wrapper>
)

export default About

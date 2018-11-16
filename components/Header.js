import React from 'react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

const slideIn = keyframes`
  0% {
    left: -800px;
  }
  100% {
    left: 10px;
  }
`

const slideOut = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -800px;
  }
`

const NavCont = styled.header`
  padding: 2rem;

  .desktop-nav {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    div {
      padding: 2rem;
    }
    a {
      color: ${props => props.theme.yellow};
      font-size: 2rem;
      :hover {
        border-bottom: 3px solid;
      }
    }
  }

  .underline {
    border-bottom: 3px solid;
  }

  .hamburger {
    display: none;
    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background: #f1c40f;
      border-radius: 3px;
    }
  }

  .mobile-nav {
    z-index: 5;
    display: none;
    position: absolute;
    left: -800px;
    width: 80vw;
    background: ${props => props.theme.yellow};
    color: ${props => props.theme.black};
    ul {
      margin: 5rem 0;
      list-style-type: none;
    }
    a {
      color: ${props => props.theme.black};
      font-size: 3rem;
      :hover {
        color: red;
      }
    }
  }

  .open {
    animation: ${slideIn} 0.2s forwards;
  }

  .close {
    animation: ${slideOut} 0.2s forwards;
  }

  @media (max-width: 800px) {
    .hamburger {
      display: block;
      position: fixed;
    }
    .mobile-nav {
      display: block;
      position: fixed;
      top: 50px;
    }
    .desktop-nav {
      display: none;
    }
  }
`

class Header extends React.Component {
  state = {
    open: false,
    route: '/'
  }

  openNav = () => {
    this.setState({
      open: !this.state.open
    })
  }

  componentDidMount() {
    this.setState({
      route: Router.router.route
    })

    Router.onRouteChangeComplete = () => {
      NProgress.done()
      this.setState({
        route: Router.router.route
      })
    }
  }

  render() {
    const { open, route } = this.state
    return (
      <NavCont>
        <div className="desktop-nav">
          <div>
            <Link href="/">
              <a className={`${route === '/' ? 'underline' : ''}`}>Y</a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a className={`${route === '/about' ? 'underline' : ''}`}>
                About Me
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/yongelee">
              <a target="_blank">Portfolio</a>
            </Link>
          </div>
          <div>
            <Link href="https://medium.com/@yongelee">
              <a target="_blank">Blog</a>
            </Link>
          </div>
          <div>
            <Link href="https://albertkim1.typeform.com/to/jpiT5P">
              <a target="_blank">Contact</a>
            </Link>
          </div>
        </div>

        <div className="hamburger" onClick={this.openNav}>
          <span />
          <span />
          <span />
        </div>

        <div className={`mobile-nav ${open ? 'open' : 'close'}`}>
          <ul>
            <li>
              <Link href="/">
                <a onClick={this.openNav}>Y</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a onClick={this.openNav}>About Me</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/yongelee">
                <a target="_blank" onClick={this.openNav}>
                  Portfolio
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://medium.com/@yongelee">
                <a target="_blank" onClick={this.openNav}>
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://albertkim1.typeform.com/to/jpiT5P">
                <a target="_blank" onClick={this.openNav}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </NavCont>
    )
  }
}

export default Header

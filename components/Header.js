import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'

const NavCont = styled.header`
  padding: 2rem;

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

      z-index: 1;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }
  }

  .mobile-nav {
    position: absolute;
    width: 300px;
    height: 200px;
    background: #ededed;
    list-style-type: none;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  .open {
    display: block;
  }

  .close {
    display: none;
  }

  @media (max-width: 800px) {
    .hamburger {
      display: block;
    }
  }
`

class Header extends React.Component {
  state = {
    open: false
  }

  openNav = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state
    return (
      <NavCont>
        <div className="hamburger" onClick={this.openNav}>
          <span />
          <span />
          <span />
        </div>

        <div className={`mobile-nav ${open ? 'open' : 'close'}`}>
          <ul>
            <li>
              <Link href="/">
                <a>One</a>
              </Link>
            </li>
          </ul>
        </div>
      </NavCont>
    )
  }
}

export default Header

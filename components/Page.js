import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import Rockwell from '../static/fonts/rock.ttf'
import bg from '../static/img/bg.jpg'
import bg1 from '../static/img/bg1.png'

const theme = {
  // put style data here
  maxWidth: '1000px',
  black: '#272727',
  yellow: '#F1C40F'
}

const StyledPage = styled.div`
  background: ${props => props.theme.black};
  color: ${props => props.theme.yellow};
  background-image: url(${bg1});
  background-size: cover;
`
const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

injectGlobal`
  @font-face {
    font-family: 'rockwell';
    src: url('${Rockwell}');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'rockwell';
  }
  a {
    text-decoration: none;
  }
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page

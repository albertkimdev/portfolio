import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'

const NavCont = styled.header`
  .bar {
  }
`

const Header = () => (
  <NavCont>
    <span>
      <i className="fas fa-bars fa-2x" />
    </span>
  </NavCont>
)

export default Header

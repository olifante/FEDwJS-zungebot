import Link from "next/link"
import {
  Navbar,
  NavbarHeader,
  NavbarBrand,
  NavbarToggle,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  NavbarCollapse
} from "react-bootstrap"
import React from "react"

const Header = function() {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link href='/'>
            <a className='navbar-brand'>
              <img src="../static/logo.png" width={40} style={{ margin: '-10px 0', display: 'inline' }} />
              <span> Zungebot</span>
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <Link href="/">
            <NavItem eventKey={1}>Home</NavItem>
          </Link>
          <Link href="/users">
            <NavItem eventKey={2}>Users</NavItem>
          </Link>
          <Link href="/requests">
            <NavItem eventKey={3}>Requests</NavItem>
          </Link>
          <Link href="/about">
            <NavItem eventKey={4}>About</NavItem>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

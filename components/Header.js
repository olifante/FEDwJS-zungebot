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

const logoContainerStyle = {
  position: "relative"
}

const logoImgStyle = {
  width: "40px",
  position: "absolute",
  top: "5px",
  left: "10px"
}

const logoTextStyle = {
  marginLeft: "50px"
}

const Header = function() {
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <div style={logoContainerStyle}>
            <img style={logoImgStyle} src="../static/logo.png" />
            <Navbar.Brand>
              <a href="#" style={logoTextStyle}>Zungebot</a>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <Link href="/">
              <NavItem eventKey={1}>
                Home
              </NavItem>
            </Link>
            <Link href="/users">
              <NavItem eventKey={2}>
                Users
              </NavItem>
            </Link>
            <Link href="/requests">
              <NavItem eventKey={3}>
                  Requests
              </NavItem>
            </Link>
            <Link href="/about">
              <NavItem eventKey={4}>
                About
              </NavItem>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header

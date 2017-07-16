import Link from "next/link"
import {Navbar, NavbarHeader, NavbarBrand, NavbarToggle, Nav, NavItem, NavDropdown, MenuItem, NavbarCollapse } from "react-bootstrap"
import React from "react"

const linkStyle = {
  marginRight: 15
}

const logoStyle = {
  width: "40px"
}

const Header = function() {
  return (
    <div>
      <Navbar inverse collapseOnSelect>
         <Navbar.Header>
          <div>
           <img style={logoStyle} src="../static/logo.png" />
          </div>
          <div>
             <Navbar.Brand>
               <a href="#">Zungebot</a>
             </Navbar.Brand>
          </div>
           <Navbar.Toggle />
         </Navbar.Header>

      <Navbar.Collapse>
         <Nav pullRight>
           <NavItem>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
          </NavItem>
          <NavItem>
      <Link href="/users">
        <a style={linkStyle}>Users</a>
      </Link>
          </NavItem>
         </Nav>
       </Navbar.Collapse>
   </Navbar>
    </div>
  )
}

export default Header

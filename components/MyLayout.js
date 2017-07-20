import Header from "./Header"
import React from "react"
import Grid from 'react-bootstrap/lib/Grid'
import Footer from "./footer"

const Layout = function(props) {
  return (
    <div>
      <Header />
      <Grid>
        {props.children}
      </Grid>
      <Footer />
    </div>
  )
}

export default Layout

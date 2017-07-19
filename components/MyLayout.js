import Header from "./Header"
import React from "react"
import Grid from 'react-bootstrap/lib/Grid'

const Layout = function(props) {
  return (
    <div>
      <Header />
      <Grid>
        {props.children}
      </Grid>
    </div>
  )
}

export default Layout

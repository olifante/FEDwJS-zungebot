import Layout from "../components/MyLayout.js"
import BootstrapHead from "../components/BootstrapHead"
import React from "react"

const Page = function() {
  return (
    <Layout>
      <BootstrapHead title="About" />
      <p>This is the about page</p>
    </Layout>
  )
}

export default Page

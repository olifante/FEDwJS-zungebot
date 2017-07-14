import Layout from "../components/MyLayout.js"
import Head from "next/head"

const Index = function() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="static/main.css"/>
      </Head>
      <Layout>
        <p>This is a page using a the main.css file, available in the special folder "static". Any file placed inside "static" can be served as a static file, and can therefore be used for serving CSS files, which can be added to any page in the usual way: by adding a "link" element pointin to "static/main.css" or similar. Other static assets such as images, fonts or any other kind of document (pdf, word, etc...) can be served this way.</p>
      </Layout>
    </div>
  )
}

export default Index

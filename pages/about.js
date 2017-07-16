import Layout from "../components/MyLayout.js"
import BootstrapHead from "../components/BootstrapHead"

const Page = function() {
  return (
    <Layout>
      <BootstrapHead title="About">
      </BootstrapHead>
      <p>This is the about page</p>
    </Layout>
  )
}

export default Page

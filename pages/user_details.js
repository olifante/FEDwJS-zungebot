import Layout from "../components/MyLayout.js"
import fetch from "isomorphic-unfetch"

const API = "https://api.notknot.com"

const rediSchoolInit = {
  method: "GET",
  headers: {
    authorization: "REDI-school_2017?",
    "access-control-allow-origin": "https://*.now.sh/about",
    mode: "cors"
  }
}

const User = function(props) {
  return (
    <Layout>
      <h1>{props.user.username}</h1>
      <p>{props.user.firstName}</p>
    </Layout>
  )
}

User.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`${API}/users/${id}`, rediSchoolInit)
  const user = await res.json()

  console.log(`Fetched user: ${JSON.stringify(user)}`)

  return { user }
}

export default User

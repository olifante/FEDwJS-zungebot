import Layout from "../components/MyLayout.js"
import fetch from "isomorphic-unfetch"

const rediSchoolInit = {
  method: "GET",
  headers: {
    "authorization": "REPLACE_ME_WITH_THE_REAL_AUTHORIZATION_TOKEN",
    "Access-Control-Allow-Origin": "http://localhost:3000"
  }
}

const Post = props =>
  <Layout>
    <h1>{props.user.username}</h1>
    <p>{props.user.firstName}</p>
  </Layout>

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(
    `http://localhost:3001/users/${id}`,
    rediSchoolInit
  )
  const user = await res.json()

  console.log(`Fetched user: ${JSON.stringify(user)}`)

  return { user }
}

export default Post

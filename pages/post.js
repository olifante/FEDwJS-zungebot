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
    `https://redi-zungebot.herokuapp.com/api/user/${id}`,
    rediSchoolInit
  )
  const user = await res.json()

  console.log(`Fetched user: ${user.firstName}`)

  return { user }
}

export default Post

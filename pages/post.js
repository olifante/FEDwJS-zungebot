import Layout from "../components/MyLayout.js"
import fetch from "isomorphic-unfetch"

const rediSchoolInit = {
  method: "GET",
  headers: {
    Authorization: "Token 123412341234"
  },
  mode: "cors",
  cache: "default"
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

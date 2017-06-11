import Layout from "../components/MyLayout.js"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const rediSchoolInit = {
  method: "GET",
  headers: {
    Authorization: "Token 123412341234"
  },
  mode: "cors",
  cache: "default"
}

const Index = props =>
  <Layout>
    <h1>Users</h1>
    <ul>
      {props.users.map(user =>
        <li key={user.username}>
          <Link as={`/p/${user.username}`} href={`/post?id=${user.username}`}>
            <a>{user.firstName} {user.lastName}</a>
          </Link>
        </li>
      )}
    </ul>
  </Layout>

Index.getInitialProps = async function() {
  const res = await fetch(
    "https://redi-zungebot.herokuapp.com/api/user/all/",
    rediSchoolInit
  )
  const data = await res.json()

  console.log(`user data fetched. Count: ${data.length}`)

  return {
    users: data
  }
}

export default Index

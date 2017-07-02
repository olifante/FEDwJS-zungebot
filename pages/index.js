import Layout from "../components/MyLayout.js"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const rediSchoolInit = {
  method: "GET",
  headers: {
    "authorization": "REPLACE_ME_WITH_THE_REAL_AUTHORIZATION_TOKEN",
    "Access-Control-Allow-Origin": "http://localhost:3000"
  }
}

const Index = props =>
  <Layout>
    <h1>Users</h1>
    <ul>
      {props.users.map(user =>
        <li key={user.username}>
          <Link as={`/p/${user.id}`} href={`/post?id=${user.id}`}>
            <a>{user.firstName} {user.lastName}</a>
          </Link>
        </li>
      )}
    </ul>
  </Layout>

Index.getInitialProps = async function() {
  const res = await fetch(
    "http://localhost:3001/users/",
    rediSchoolInit
  )
  const data = await res.json()

  console.log(`user data fetched. Count: ${data.length}`)

  return {
    users: data
  }
}

export default Index

import Layout from "../components/MyLayout.js"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const API = "https://api.notknot.com/users"

const rediSchoolInit = {
  method: "GET",
  headers: {
    authorization: "REDI-school_2017?",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    mode: "cors"
  }
}

const Users = function(props) {
  return (
    <Layout>
      <h1>Users</h1>
      <ul>
        {props.users.map(user =>
          <li key={user.id}>
            <Link as={`/users/${user.id}`} href={`/users?id=${user.id}`}>
              <a>{user.firstName} {user.lastName}</a>
            </Link>
          </li>
        )}
      </ul>
    </Layout>
  )
}

Users.getInitialProps = async function() {
  const res = await fetch(`${API}/users`, rediSchoolInit)
  const data = await res.json()

  console.log(`user data fetched. Count: ${data.length}`)

  return {
    users: data
  }
}

export default Users

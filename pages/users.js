import Layout from "../components/MyLayout.js"
import Link from "next/link"
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

const Users = function(props) {
  return (
    <Layout>
      <h1>Users</h1>
      <ul>
        {props.users.map(user =>
          <li key={user.id}>
            <Link as={`/users/${user.id}`} 
            href={`/user_details?id=${user.id}`}>
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
  const users = await res.json()

  console.log(`user data fetched. Count: ${users.length}`)

  return { users }
}

export default Users

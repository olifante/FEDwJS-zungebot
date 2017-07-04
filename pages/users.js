import Layout from "../components/MyLayout.js"
import Link from "next/link"
import get from "../services/get"

const Users = function(props) {
  return (
    <Layout>
      <h1>Users</h1>
      <ul>
        {props.users.map(user =>
          <li key={user.id}>
            <Link as={`/users/${user.id}`} href={`/user_details?id=${user.id}`}>
              <a>
                {user.firstName} {user.lastName}
              </a>
            </Link>
          </li>
        )}
      </ul>
    </Layout>
  )
}

Users.getInitialProps = async function() {
  const response = await get("/users")
  const users = await response.json()

  console.log(`user data fetched. Count: ${users.length}`)

  return { users }
}

export default Users

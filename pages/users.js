import Layout from "../components/MyLayout.js"
import Link from "next/link"
import Head from "next/head"
import get from "../services/get"

const Users = function(props) {
  return (
    <div>
      <Head>
        <title>Users</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"
        />
      </Head>
      <Layout>
        <h1>Users</h1>
        <ul>
          {props.users.map(user =>
            <li key={user.id}>
              <Link
                as={`/users/${user.id}`}
                href={`/user_details?id=${user.id}`}
              >
                <a>
                  {user.firstName} {user.lastName}
                </a>
              </Link>
            </li>
          )}
        </ul>
        <Link href="/user_create">
          <button className="btn btn-primary">add new user</button>
        </Link>
      </Layout>
    </div>
  )
}

Users.getInitialProps = async function() {
  const response = await get("/users")
  const users = await response.json()

  console.log(`user data fetched. Count: ${users.length}`)

  return { users }
}

export default Users

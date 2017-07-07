import Layout from "../components/MyLayout.js"
import get from "../services/get"

const User = function(props) {
  return (
    <Layout>
      <h1>
        {props.user.username}
      </h1>
      <p>
        {props.user.firstName}
      </p>
    </Layout>
  )
}

User.getInitialProps = async function(context) {
  const { id } = context.query
  const response = await get(`/users/${id}`)
  const user = await response.json()

  console.log(`Fetched user: ${JSON.stringify(user)}`)

  return { user }
}

export default User

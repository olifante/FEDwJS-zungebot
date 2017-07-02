import Layout from "../components/MyLayout.js"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const API = "https://api.notknot.com"

const rediSchoolInit = {
  method: "GET",
  headers: {
    authorization: "REDI-school_2017?",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    mode: "cors"
  }
}

const Requests = function(props) {
  return (
    <Layout>
      <h1>Users</h1>
      <ul>
        {props.users.map(user =>
          <li key={user.username}>
            <Link
              as={`/requests/${request.id}`}
              href={`/requests?id=${request.id}`}
            >
              <a>{request.subject}</a>
            </Link>
          </li>
        )}
      </ul>
    </Layout>
  )
}

Requests.getInitialProps = async function() {
  const res = await fetch(`${API}/requests`, rediSchoolInit)
  const data = await res.json()

  console.log(`request data fetched. Count: ${data.length}`)

  return {
    request: data
  }
}

export default Requests

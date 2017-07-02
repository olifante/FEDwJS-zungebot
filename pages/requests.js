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

const Requests = function(props) {
  return (
    <Layout>
      <h1>Requests</h1>
      <ul>
        {props.requests.map(request =>
          <li key={request.id}>
            <Link as={`/requests/${request.id}`} href={`/request_details?id=${request.id}`}>
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
  const requests = await res.json()

  console.log(`request data fetched. Count: ${requests.length}`)

  return { requests }
}

export default Requests

import Layout from "../components/MyLayout.js"
import Link from "next/link"
import Head from "next/head"
import get from "../services/get"

const Requests = function(props) {
  return (
    <div>
      <Head>
        <title>Requests</title>
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
        <h1>Requests</h1>
        <ul>
          {props.requests.map(request =>
            <li key={request.id}>
              <Link
                as={`/requests/${request.id}`}
                href={`/request_details?id=${request.id}`}
              >
                <a>
                  {request.subject}
                </a>
              </Link>
            </li>
          )}
        </ul>
        <Link href="/request_create">
          <button className="btn btn-primary">add new request</button>
        </Link>
      </Layout>
    </div>
  )
}

Requests.getInitialProps = async function() {
  const response = await get("/requests")
  const requests = await response.json()

  console.log(`request data fetched. Count: ${requests.length}`)

  return { requests }
}

export default Requests

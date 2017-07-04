import Layout from "../components/MyLayout.js"
import Link from "next/link"
import get from '../services/get'

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
      <Link href='/request_create'>
        <button className='btn btn-primary'>add new</button>
      </Link>
    </Layout>
  )
}

Requests.getInitialProps = async function() {
  const response = await get('/requests')
  const requests = await response.json()

  console.log(`request data fetched. Count: ${requests.length}`)

  return { requests }
}

export default Requests

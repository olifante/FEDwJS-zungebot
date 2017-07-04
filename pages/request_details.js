import Layout from "../components/MyLayout.js"
import get from '../services/get'

const Request = function(props) {
  return (
    <Layout>
      <h1>{props.request.subject}</h1>
      <p>Seeker: {props.request.seeker}</p>
      <p>Date: {props.request.date}</p>
      <p>Location: {props.request.location.streetAddress}</p>
    </Layout>
  )
}

Request.getInitialProps = async function(context) {
  const { id } = context.query
  const response = await get(`/requests/${id}`)
  const request = await response.json()

  console.log(`Fetched request: ${JSON.stringify(request)}`)

  return { request }
}

export default Request

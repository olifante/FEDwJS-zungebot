import Layout from "../components/MyLayout.js"
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
  const res = await fetch(`${API}/requests/${id}`, rediSchoolInit)
  const request = await res.json()

  console.log(`Fetched request: ${JSON.stringify(request)}`)

  return { request }
}

export default Request

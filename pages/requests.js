import Layout from "../components/MyLayout.js"
import Link from "next/link"
import BootstrapHead from "../components/BootstrapHead"
import get from "../services/get"
import React from "react"
import { PageHeader, Media, Image } from "react-bootstrap"

const Requests = function(props) {
  return (
    <div>
      <BootstrapHead title="Requests" />
      <Layout>
        <PageHeader>
          Requests <small>what, where and when</small>
        </PageHeader>
        <div>
          {props.requests.map((request, index) =>
            <Media key={request.id}>
              <Media.Left>
                <Image
                  src={`http://lorempixel.com/300/200/city/${index % 10}`}
                  alt="300x200"
                  width={300}
                  height={200}
                  key={request.id}
                  rounded
                />
              </Media.Left>
              <Media.Body>
                <Media.Heading>
                  <Link
                    as={`/requests/${request.id}`}
                    href={`/request_details?id=${request.id}`}
                  >
                    <a>
                      {request.subject}
                    </a>
                  </Link>
                </Media.Heading>
                <p>
                  {request.description}
                </p>
              </Media.Body>
            </Media>
          )}
        </div>
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

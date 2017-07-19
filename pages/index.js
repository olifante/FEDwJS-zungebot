import Layout from "../components/MyLayout.js"
import BootstrapHead from "../components/BootstrapHead"
import React from "react"
import Link from "next/link"
import get from "../services/get"
import {
  Jumbotron,
  Button,
  Panel,
  Grid,
  Row,
  Col,
  Thumbnail,
  PageHeader,
  Image,
  Label
} from "react-bootstrap"

const Index = function(props) {
  return (
    <Layout>
      <BootstrapHead title="Home" />
      <Jumbotron>
        <h1>Welcome to Zungebot</h1>
        <p>
          Zungebot is a matchmaker between a German speaking volunteer and
          people needing language support for specific issues.
        </p>
        <p>
          <Link href="/user_create">
            <Button bsStyle="primary">Join us!</Button>
          </Link>
        </p>
      </Jumbotron>
      <PageHeader>
        Requests <small>language needs at a specific time an place</small>
      </PageHeader>

      <Grid>
        <Row>
          {props.requests.map((request, index) =>
            <Col xs={6} md={4}>
              <Thumbnail
                src={`http://lorempixel.com/200/300/city/${index}`}
                alt="200x300"
                key={request.id}
                rounded
              >
                <Link
                  as={`/requests/${request.id}`}
                  href={`/request_details?id=${request.id}`}
                >
                  <a>
                    <h3>
                      {request.subject}
                    </h3>
                  </a>
                </Link>
                <p>
                  {request.description}
                </p>
                <p>
                  <Button bsStyle="primary">Accept</Button>&nbsp;
                  <Button bsStyle="default">Ignore</Button>
                </p>
              </Thumbnail>
            </Col>
          )}
        </Row>
      </Grid>
      <PageHeader>
        Users <small>helpers and seekers</small>
      </PageHeader>
      <Grid>
        <Row>
          {props.users.map((user, index) =>
            <Col xs={6} md={4}>
              <Link
                as={`/users/${user.id}`}
                href={`/user_details?id=${user.id}`}
              >
                <a>
                  <Image
                    src={`http://lorempixel.com/200/200/animals/${index}`}
                    alt="200x200"
                    width={200}
                    height={200}
                    key={user.id}
                    circle
                  />
                  <h3>
                    {user.firstName} {user.lastName}
                  </h3>
                  {user.helper &&
                    <span>
                      <Label bsStyle="default">Helper</Label>&nbsp;
                    </span>}
                  {user.seeker &&
                    <span>
                      <Label bsStyle="primary">Seeker</Label>&nbsp;
                    </span>}
                  <p>
                    {user.bio.substr(0, 100) + " (...)"}
                  </p>
                </a>
              </Link>
            </Col>
          )}
        </Row>
      </Grid>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const response1 = await get("/requests?_limit=10")
  const requests = await response1.json()
  console.log(`requests fetched. Count: ${requests.length}`)

  const response2 = await get("/users?_limit=10")
  const users = await response2.json()
  console.log(`users fetched. Count: ${users.length}`)

  return { requests, users }
}

export default Index

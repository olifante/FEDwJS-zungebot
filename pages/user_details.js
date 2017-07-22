import Layout from "../components/MyLayout.js"
import get from "../services/get"
import BootstrapHead from "../components/BootstrapHead"
import React from "react"
import { Media, Image, PageHeader, Label, Row, Col,Grid, ListGroup, ListGroupItem } from "react-bootstrap"

const userInfoStyle = {
  padding : "20px 0px"
}

const User = function(props) {
  return <Layout>
      <BootstrapHead title="User details" />
      <Grid>
        <div>
      <h1>
            {props.user.firstName} {props.user.lastName}
      </h1>
          <h2>
            {props.user.username}
          </h2>
          {props.user.helper && <span>
              <Label bsStyle="default">Helper</Label>&nbsp;
            </span>}
          {props.user.seeker && <span>
              <Label bsStyle="primary">Seeker</Label>&nbsp;
            </span>}
        </div>
        <Row style={userInfoStyle}>
          <Col sm={8}>
            <ListGroup>
              <ListGroupItem>
                <h4> Bio </h4>  
                {props.user.bio}
              </ListGroupItem>
              <ListGroupItem>
                <h4>Languages:</h4>
                <ul>
                  {props.user.languages.map((language, index) => 
                    <li key={index}>
                      {language}
                    </li>)}
                </ul>
              </ListGroupItem>
              <ListGroupItem>
                <h4>Email</h4>
                <a href="mailto:{props.user.email}">
                  {props.user.email}
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <h4>Phone</h4>
      <p>
                  {props.user.phone}
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={4}>
            <Image src={`//lorempixel.com/200/200/animals/${props.user.id % 10}`} alt="200x200" width={200} height={200} right />
          </Col>
        </Row>
      </Grid>
    </Layout>
}

User.getInitialProps = async function(context) {
  const { id } = context.query
  const response = await get(`/users/${id}`)
  const user = await response.json()

  console.log(`Fetched user: ${JSON.stringify(user)}`)

  return { user }
}

export default User

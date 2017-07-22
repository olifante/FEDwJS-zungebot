import Layout from "../components/MyLayout.js"
import get from "../services/get"
import BootstrapHead from "../components/BootstrapHead"
import React from "react"
import { Media, Image, PageHeader, Label, Row, Col,Grid, ListGroup, ListGroupItem } from "react-bootstrap"

const requestInfoStyle = {
  padding : "20px 0px"
}

const Request = function(props) {
  return (
    <Layout>
      <BootstrapHead title="Request details" />
      <Grid>
        <div>
          <h1>{props.request.subject}</h1>
          <Label bsStyle="primary">Seeker</Label>
          <h4>{props.request.seeker}</h4> 
        </div>
        <Row style={requestInfoStyle}>
          <Col sm={8}>
            <ListGroup>
              <ListGroupItem>
                <h4> Date </h4>
                <p>{props.request.date} </p>
              </ListGroupItem>
              <ListGroupItem>
                <h4> Location </h4>
               <p>{props.request.location.streetAddress}, {props.request.location.city}, {props.request.location.zip}</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={4}>
            <Image src={`http://lorempixel.com/300/200/city/${props.request.id % 10}`} 
            alt="300x200" width={300} height={200} right />
          </Col>
        </Row>
      </Grid>
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

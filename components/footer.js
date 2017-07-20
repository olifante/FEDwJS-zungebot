import React from "react"
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

const footerStyle = {
    padding: "50px 100px",
    backgroundColor: "#eee"
}


let Footer = function(){
    return(
        <Row style={footerStyle}>
            <Col xs={12} sm={6}>
                <p> Made with love by <a href="#"> <strong>ReDI Frontend Class</strong></a></p> 
            </Col>
            <Col xs={12} sm={6}>
                 
            </Col>
        </Row>
    )
} 

export default Footer
import Layout from "../components/MyLayout.js"
import Router from "next/router"
import post from "../services/post"
import { Formik } from "formik"
import Yup from "yup"
import BootstrapHead from "../components/BootstrapHead"
import React from "react"
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button,
  Col,
  PageHeader
} from "react-bootstrap"

const Request = function({
  values,
  handleChange,
  handleSubmit,
  handleReset,
  errors,
  error,
  isSubmitting
}) {
  return (
    <Layout>
      <BootstrapHead title="Create request" />
      <PageHeader>
        Create new request <small>what, where and when</small>
      </PageHeader>
      <Form horizontal onSubmit={handleSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Seeker email
          </Col>
          <Col sm={10}>
            <FormControl
              type="email"
              placeholder="Enter your email"
              name="seeker"
              value={values.seeker}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Subject
          </Col>
          <Col sm={10}>
            <FormControl
              name="subject"
              placeholder="Enter a subject"
              value={values.subject}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Date
          </Col>
          <Col sm={10}>
            <FormControl
              name="date"
              placeholder="Enter a date and time (e.g. 2017-07-19T10:00)"
              value={values.date}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox
              name="helper"
              value={values.helper}
              onChange={handleChange}
            >
              Helper
            </Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox
              name="seeker"
              value={values.seeker}
              onChange={handleChange}
            >
              Seeker
            </Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" disabled={isSubmitting}>
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Layout>
  )
}

export default Formik({
  validationSchema: Yup.object().shape({
    seeker: Yup.string().email().required(),
    date: Yup.date().required(),
    subject: Yup.string().required()
  }),

  mapPropsToValues: function(props) {
    return {
      seeker: props.seeker || "",
      date: props.date || "",
      subject: props.subject || ""
    }
  },

  handleSubmit: async function(payload, { props, setError, setSubmitting }) {
    try {
      const response = await post("/requests", payload)
      const result = await response.json()
      console.info(result)
      Router.push("/requests")
    } catch (e) {
      console.error(e)
      setError(e)
    }
    setSubmitting(false)
  }
})(Request)

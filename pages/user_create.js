import Layout from "../components/MyLayout.js"
import Router from "next/router"
import post from "../services/post"
import { Formik } from "formik"
import Yup from "yup"
import BootstrapHead from "../components/BootstrapHead"
import React from "react"

const User = function({
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
      <BootstrapHead title="Create user" />
      <form onSubmit={handleSubmit}>
        <h1>New user</h1>
        <p>
          Username:{" "}
          <input
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </p>
        <p>
          First Name:{" "}
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </p>
        <p>
          Last Name:{" "}
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </p>
        <p>
          Helper:{" "}
          <input name="helper" value={values.helper} onChange={handleChange} />
        </p>
        <p>
          Seeker:{" "}
          <input name="seeker" value={values.seeker} onChange={handleChange} />
        </p>
        <p>
          Languages:{" "}
          <input
            name="languages"
            value={values.languages}
            onChange={handleChange}
          />
        </p>
        <p>
          Biography:{" "}
          <input name="bio" value={values.bio} onChange={handleChange} />
        </p>
        <p>
          Email:{" "}
          <input name="email" value={values.email} onChange={handleChange} />
        </p>
        <p>
          Phone:{" "}
          <input name="phone" value={values.phone} onChange={handleChange} />
        </p>
        <button type="submit" disabled={isSubmitting}>
          OK
        </button>
      </form>
    </Layout>
  )
}

export default Formik({
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    helper: Yup.string(),
    seeker: Yup.string(),
    languages: Yup.string(),
    bio: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string()
  }),

  mapPropsToValues: function(props) {
    return {
      username: props.username || "",
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      helper: props.helper || "",
      seeker: props.seeker || "",
      languages: props.languages || "",
      bio: props.bio || "",
      email: props.email || "",
      phone: props.phone || ""
    }
  },

  handleSubmit: async function(payload, { props, setError, setSubmitting }) {
    try {
      const response = await post("/users", payload)
      const result = await response.json()
      console.info(result)
      Router.push("/users")
    } catch (e) {
      console.error(e)
      setError(e)
    }
    setSubmitting(false)
  }
})(User)

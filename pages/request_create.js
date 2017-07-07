import Layout from "../components/MyLayout.js"
import Router from "next/router"
import post from "../services/post"
import { Formik } from "formik"
import Yup from "yup"

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
      <form onSubmit={handleSubmit}>
        <h1>New request</h1>
        <p>
          Subject:{" "}
          <input
            name="subject"
            value={values.subject}
            onChange={handleChange}
          />
        </p>
        <p>
          Seeker:{" "}
          <input name="seeker" value={values.seeker} onChange={handleChange} />
        </p>
        <p>
          Date:{" "}
          <input name="date" value={values.date} onChange={handleChange} />
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
    seeker: Yup.string(),
    date: Yup.string(),
    subject: Yup.string()
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

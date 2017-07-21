import Layout from "../components/MyLayout.js"
import get from "../services/get"
import BootstrapHead from "../components/BootstrapHead"
import React from "react"
import { Image } from "react-bootstrap"

const User = function(props) {
  return (
    <Layout>
      <BootstrapHead title="User details" />
      <Image
                  src={`//lorempixel.com/200/200/animals/${props.user.id % 10}`}
                  alt="200x200"
                  width={200}
                  height={200}
                  circle
                />
      <h1>
        {props.user.username}
      </h1>
      <h4>
        {props.user.firstName}
      </h4>
      <h4><span><em>Languages: </em></span>
      {props.user.languages.map((language, index) =>
        <b key={index}>{language}{props.user.languages.length-1 != index && <span>, </span> }</b>
        )
      }
      </h4>
    </Layout>
  )
}

User.getInitialProps = async function(context) {
  const { id } = context.query
  const response = await get(`/users/${id}`)
  const user = await response.json()

  console.log(`Fetched user: ${JSON.stringify(user)}`)

  return { user }
}

export default User

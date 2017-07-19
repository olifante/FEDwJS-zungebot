import Layout from "../components/MyLayout.js"
import Link from "next/link"
import get from "../services/get"
import BootstrapHead from "../components/BootstrapHead"
import React from "react"
import { Media, Image, PageHeader, Label } from "react-bootstrap"

const Users = function(props) {
  return (
    <div>
      <BootstrapHead title="Users" />
      <Layout>
        <PageHeader>
          Users <small>helpers and seekers</small>
        </PageHeader>
        <div>
          {props.users.map((user, index) =>
            <Media key={user.id}>
              <Media.Left>
                <Image
                  src={`http://lorempixel.com/200/200/animals/${index % 10}`}
                  alt="200x200"
                  width={200}
                  height={200}
                  key={user.id}
                  circle
                />
              </Media.Left>
              <Media.Body>
                <Media.Heading>
                  <Link
                    as={`/users/${user.id}`}
                    href={`/user_details?id=${user.id}`}
                  >
                    <a>
                      {user.firstName} {user.lastName}
                    </a>
                  </Link>
                </Media.Heading>
                <p>
                  {user.bio}
                </p>
                {user.helper &&
                  <span>
                    <Label bsStyle="default">Helper</Label>&nbsp;
                  </span>}
                {user.seeker &&
                  <span>
                    <Label bsStyle="primary">Seeker</Label>&nbsp;
                  </span>}
              </Media.Body>
            </Media>
          )}
        </div>
        <Link href="/user_create">
          <button className="btn btn-primary">add new user</button>
        </Link>
      </Layout>
    </div>
  )
}

Users.getInitialProps = async function() {
  const response = await get("/users")
  const users = await response.json()

  console.log(`user data fetched. Count: ${users.length}`)

  return { users }
}

export default Users

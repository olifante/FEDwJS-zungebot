import Link from "next/link"

const linkStyle = {
  marginRight: 15
}

const Header = function() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/users">
        <a style={linkStyle}>Users</a>
      </Link>
      <Link href="/requests">
        <a style={linkStyle}>Requests</a>
      </Link>
      <Link href="/page_using_css_file">
        <a style={linkStyle}>Page with CSS file</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  )
}

export default Header

import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"

import "normalize.css";
import "../scss/main.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <header className="header">{header}</header>
        <main className="main">{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()}
          <Bio />
        </footer>
      </div>
    )
  }
}

export default Layout

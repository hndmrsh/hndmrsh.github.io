/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import NavBar from "./nav-bar"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <p>
            <span class="line">© {new Date().getFullYear()}.</span>
            <span class="line">&nbsp;Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.</span>
            <span class="line">&nbsp;Thanks to <a href="https://github.com/jeanregisser/jeanregisser.com">Jean Regisser</a> and <a href="https://github.com/vibertthio/portfolio">Vibert Thio</a>.</span>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

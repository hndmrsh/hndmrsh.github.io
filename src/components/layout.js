/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
<<<<<<< HEAD
import { useStaticQuery, graphql } from "gatsby"
=======
>>>>>>> 85da65c... Add typing text to landing page

import "./layout.css"

const Layout = ({ children }) => {
<<<<<<< HEAD
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

=======
>>>>>>> 85da65c... Add typing text to landing page
  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          <p>
            © {new Date().getFullYear()}.
            Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
            Thanks to <a href="https://github.com/jeanregisser/jeanregisser.com">Jean Regisser</a>.
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

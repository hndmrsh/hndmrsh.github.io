import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./404.module.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className={styles.landing}>
      <h2 className={styles.title}>404</h2>
    </div>
  </Layout>
)

export default NotFoundPage

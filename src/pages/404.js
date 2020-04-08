import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

<<<<<<< HEAD
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
=======
import styles from "./404.module.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className={styles.landing}>
      <h2 className={styles.title}>404</h2>
    </div>
>>>>>>> 7d0ccfd... Add blog page
  </Layout>
)

export default NotFoundPage

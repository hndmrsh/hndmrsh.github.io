import React from "react"

import Layout from "../components/layout"
import LandingSubtitle from "../components/landing-subtitle"
import SocialLink from "../components/social-link"
import SEO from "../components/seo"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faSoundcloud,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

import styles from "./index.module.css"

/*

TODO:
  - navigation as per: https://www.gatsbyjs.org/showcase/vibertthio.comportfolio
  - a blog list page with entries from the Medium API
  - a CV download link
  - (maybe) a projects list page
  - (maybe) a music list page
*/

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{ position: "relative" }}>
      <div
        className={styles.wrapper}
        style={{ height: "100vh" }}
      >
        <div className={styles.landing}>
          <div className={styles.fadeTop}>
            <h1 className={styles.title}>Sam Hindmarsh</h1>
            <LandingSubtitle />
          </div>
          <div className={`${styles.socialLinks} ${styles.fadeBottom}`}>
            <SocialLink
              name="Email"
              icon={faEnvelope}
              href="mailto:sam@hndmr.sh"
            />
            <SocialLink
              name="GitHub"
              icon={faGithub}
              href="https://github.com/hndmrsh"
            />
            <SocialLink
              name="LinkedIn"
              icon={faLinkedin}
              href="https://www.linkedin.com/in/hndmrsh"
            />
            <SocialLink
              name="Instagram"
              icon={faInstagram}
              href="https://instagram.com/hndmrsh"
            />
            <SocialLink
              name="Twitter"
              icon={faTwitter}
              href="https://twitter.com/hndmrsh"
            />
            <SocialLink
              name="Soundcloud"
              icon={faSoundcloud}
              href="https://soundcloud.com/hndmrsh"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

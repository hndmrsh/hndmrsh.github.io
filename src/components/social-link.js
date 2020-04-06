import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./social-link.module.css"

const SocialLink = ({ name, href, icon }) => {
  return (
    <a className={styles.link} href={href}>
      <FontAwesomeIcon icon={icon} />
      <span className={styles.title}>{name}</span>
    </a>
  )
}

export default SocialLink

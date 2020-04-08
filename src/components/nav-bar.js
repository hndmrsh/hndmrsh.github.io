import React from "react"
import Link from "gatsby-link"
import styles from "./nav-bar.module.css"
import cv from "../files/cv-sam-hindmarsh.pdf"

const isCurrentLink = ({ isCurrent }) => {
  return isCurrent
    ? { className: `${styles.navLink} ${styles.active}` }
    : { className: `${styles.navLink} ${styles.inactive}` }
}

const ListLink = props => {
  return (
    <li style={{ display: "inline-block" }}>
      <Link to={props.to} getProps={isCurrentLink}>
        <h2 className={styles.navItem}>{props.children}</h2>
      </Link>
    </li>
  )
}

const ListLinkOut = props => {
  return (
    <li style={{ display: "inline-block" }}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.to}
        className={styles.navLink}
      >
        <h2 className={styles.navItem}>{props.children}</h2>
      </a>
    </li>
  )
}

const ListDivider = () => {
  return (
    <li
      className={`${styles.navListItem} ${styles.inactive}`}
      style={{
        display: "inline-block",
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
      }}
    >
      <h2 className={styles.navItem}>
        {
          // Double-slash divider is not a comment, so ignore the warning
          // that it will be rendered in the text.
          // eslint-disable-next-line
        }
        //
      </h2>
    </li>
  )
}

const NavBar = props => {
  return (
    <ul className={styles.navBar} style={{ listStyle: "none" }}>
      <ListLink to="/" path={props.path}>
        Home
      </ListLink>
      <ListDivider />
      <ListLink to="/blog/" path={props.path}>
        Blog
      </ListLink>
      <ListDivider />
      {/*
      <ListLink to="/music/" path={props.path}>
        Music
      </ListLink>
      <ListDivider />
      */}
      <ListLinkOut to={cv} path={props.path}>
        CV
      </ListLinkOut>
    </ul>
  )
}

export default NavBar

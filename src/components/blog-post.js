import React from "react"
import Link from "gatsby-link"
import moment from "moment"

import styles from "./blog-post.module.css"

const BlogPost = props => {
  return (
    <div
      className={`${styles.blogPostListItem} ${styles.fadeIn}`}
      key={props.title}
      style={{ animationDelay: `${0.4 + 0.2 * props.index}s` }}
    >
      <li>
        <a
          className={styles.titleLink}
          rel="noopener noreferrer"
          target="_blank"
          href={props.to}
        >
          <h2 className={styles.title}>{props.title}</h2>
        </a>
        <div className={styles.descriptionContainer}>
          <p className={styles.date}>
            {moment(props.date).format("dddd Do MMMM YYYY")}
          </p>
          <p className={styles.tags}>
            Tags: {props.tags.map(tag => tag.replace("-", " ")).join(", ")}
          </p>
        </div>
      </li>
      {props.isLast ? <hr className={styles.blogPostDivider} /> : ""}
    </div>
  )
}

export default BlogPost

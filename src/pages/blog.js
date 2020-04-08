import React, { useState, useEffect } from "react"
import MediumFeed from "medium-feed"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPost from "../components/blog-post"
import LoadingIndicator from "../components/loading-indicator"

import styles from "./blog.module.css"

const BlogPage = () => {
  const [blogEntries, setBlogEntries] = useState(0)

  useEffect(() => {
    var mediumFeed = new MediumFeed(
      { useProxy: true }
    )

    mediumFeed.getUserFeed("hndmrsh", feed => {
      setBlogEntries(
        feed.filter(entry => {
          // Assume entries with no categories are comment replies
          return entry.categories.length > 0
        })
      )
    })
  }, [])

  return (
    <Layout>
      <SEO title="Blog" />
      <div className={styles.blogWrapper}>
        <ul style={{ margin: "0", padding: "0" }}>
          {blogEntries != 0 ? (
            blogEntries.map((article, index) => {
              return (
                <BlogPost
                  title={article.title}
                  tags={article.categories}
                  to={article.link}
                  date={article.pubDate}
                  index={index}
                  isLast={index < blogEntries.length - 1}
                />
              )
            })
          ) : (
            <div />
          )}
        </ul>
        <div className={styles.wrapper} style={{ height: "100vh" }}>
          <LoadingIndicator loading={blogEntries == 0} />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

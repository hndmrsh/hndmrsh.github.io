import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPost from "../components/blog-post"
import LoadingIndicator from "../components/loading-indicator"

import styles from "./blog.module.css"

const BlogPage = () => {
  const [blogEntries, setBlogEntries] = useState(0)

  const data = useStaticQuery(graphql`
    query MediumFeedQuery {
     allMediumFeed {
        nodes {
           title
           categories
           link
           date(formatString: "MM-DD-YYYY")
        }
        totalCount
     }
    }
  `)

  useEffect(() => {
    setBlogEntries(data.allMediumFeed)
  }, [])

  return (
    <Layout>
      <SEO title="Blog" />
      <div className={styles.blogWrapper}>
        <ul style={{ margin: "0", padding: "0" }}>
          {blogEntries && blogEntries.totalCount != 0 ? (
            blogEntries.nodes.map((article, index) => {
              return (
                <BlogPost
                  title={article.title}
                  tags={article.categories}
                  to={article.link}
                  date={article.date}
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

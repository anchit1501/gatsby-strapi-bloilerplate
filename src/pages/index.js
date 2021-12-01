import * as React from "react"
import {  graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/post"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" /> 
    <Post data ={data.allStrapiArticle.edges[0].node.data} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
query MyQuery {
    allStrapiArticle {
      edges {
        node {
          data {
            id
            attributes {
              content
              title
              createdAt
              publishedAt
            }
          }
        }
      }
    }
  }
`
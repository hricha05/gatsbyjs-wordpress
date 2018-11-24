import React from 'react'
import { graphql } from 'gatsby'
// import { Link } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>About { data.site.siteMetadata.title }</h1>
    <p style={{ textAlign: 'center', fontSize: '18px', padding: '10px' }}>This is a test</p>
  </Layout>
)

export const query = graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
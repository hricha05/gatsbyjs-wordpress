import React from 'react'
import { graphql } from 'gatsby'
// import { node } from 'prop-types';
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Grid from '@material-ui/core/Grid'

export default ({ data }) => {
  console.log(data)
  return <Layout>
      <Grid container spacing={24}>
      <hr></hr>
        <div>
          <h1>Wordpress Posts</h1>
          <h4>Posts</h4>
          {data.allWordpressPost.edges.map(({ node }) => <div>
              <p>{node.title}</p>
              <div dangerouslySetInnerHTML={{ __html: node.content }} />
            </div>)}
        </div>
      </Grid>
    </Layout>
}

export const pageQuery = graphql`
  query {
  allWordpressPost(sort: { fields: [date] }) {
    edges {
      node {
        title
        content
        slug
      }
    }
  }
}
`



// const IndexPage = () => (
//   <Layout>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
//       <Image />
//     </div>
//     <Link to="/about/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage
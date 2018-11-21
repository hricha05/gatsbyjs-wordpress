import React from 'react'
// import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <h1>Events</h1>
        <p>{data.allWordpressPages.edges.node.title}</p>
    </Layout>
)

// export default Events

// export const query = graphql ` 
//     query {
//         allWordpressPage {
//             edges {
//                 node{
//                     title
//                 }
//             }
//         }
//     }
// `
import React from 'react'

import Layout from '../components/layout'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// const styles ={
//   card: {
//     maxWidth: 720,
//   }
// }

const Events = ({ data }) => {
  console.log(data)
  return <Layout>
      <Grid container spacing={24}>
        <hr />
        <div>
          <h1>Wordpress Posts</h1>
          <h4 style={{ textAlign: 'center' }}>
            Posts
          </h4>
          {data.allWordpressPost.edges.map(({ node }) => (
            <div
              style={{
                margin: 20,
              }}>
              <Grid item sx={4}>
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p
                          style={{
                            textAlign: 'center',
                          }}>
                          {node.title}
                        </p>
                      </Typography>
                      <Typography component="p">
                        <div
                          dangerouslySetInnerHTML={{ __html: node.content }}
                        />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </div>
          ))}
        </div>
      </Grid>
    </Layout>
}

export default Events

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

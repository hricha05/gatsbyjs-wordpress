import React from 'react'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data)
  return <Layout>
      <Grid container direction="row" justify="center" alignContent="center">
        <h1 style={{
          textAlign:"center",
          paddingTop: 20
        }}>Landing Page Image</h1>
      </Grid>
    </Layout>
}





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
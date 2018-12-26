import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


const Header = ({ data }) => (
  <div id="header_div">
    <div
      // style={{ margin: '0 auto', maxWidth: 960 }}
      >
      <h1 style={{ fontSize: '24px' }} id="header_h1">
          <Link style={{ margin: 0, padding: 0, color: 'white', textDecoration: 'none' }} to="/" id="siteMetadata">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
    </div>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)

Header.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}


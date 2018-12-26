import React from 'react'
import PropTypes from 'prop-types'
// import { MuiThemeProvider } from '@material-ui/core';

import Navbar from '../components/navbar'
// import theme from '../themes/default'
import './layout.css'

const Layout = ({ children }) => (
  // <MuiThemeProvider theme={theme} >
  <div>
    <Navbar id="layout_Navbar" />
    <hr></hr>
    <div
      style={{
        // margin: '0 auto',
        // maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        // paddingTop: 0,
      }}>
      {children}
      </div>
  </div>
    // </MuiThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div style={{ background: 'rebeccapurple', marginBottom: '1.45rem', }}>
    <div
      style={{ margin: '0 auto', maxWidth: 960, padding: '0.45rem 1.0875rem', }}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', }}>{ siteTitle }</Link>
      </h1>
      <nav style={{ display: 'flex', alignItems: 'left', justifyContent: 'flex-end' }}>
        <ul style={{listStyle: 'none' }}>
          <Link to='/about/' style={{ margin: 20, textDecoration: 'none'}}>About</Link>
          <Link style={{ margin: 20, textDecoration: 'none' }}>Events</Link>
          <Link style={{ margin: 20, textDecoration: 'none' }}>Events</Link>
          <Link style={{marginLeft: 20, textDecoration: 'none'}}>Contact</Link>
        </ul> 
      </nav>
    </div>
  </div>
)

export default Header

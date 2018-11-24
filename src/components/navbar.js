import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import { Link } from 'gatsby'
// import Header from './header';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 2,
  },
  disply: {
      textDecoration: 'none',
      color: 'white'
  }
};

function Navbar (props) {
  const { classes } = props;
  return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Grid item xs={8}>
                <Typography variant="p" className={classes.grow}>
                  <Link to="/" className={classes.disply}>
                    <h1>Purple Gorilla</h1>
                  </Link>
                </Typography>
              </Grid>             
              <Grid item xs={1}>
                <Typography>
                <Link to="/about/" className={classes.disply}>
                  About
                </Link>
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>
                <Link to="src/templates/pages" className={classes.disply}>
                  Events
                </Link>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>
                <Link to="/about/" className={classes.disply}>
                  Contact
                </Link>
                </Typography>
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
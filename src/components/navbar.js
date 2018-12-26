import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

import Header from '../components/header'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Link } from 'gatsby'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 2,
  },
}

function Navbar (props) {
  const { classes } = props;
  return <div id="navbar_div" className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justify="flex-end" alignItems="center">
            <Grid item xs={8}>
              <Typography variant="title" color="inherit">
                <Link to="/">
                  <Header />
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>
                <Link to="/about/">
                  About
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>
                <Link to="/events/">
                  Events
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>
                <Link to="/">
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
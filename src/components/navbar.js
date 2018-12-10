import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header'
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
    // backgroundColor: 'white',
  },
  grow: {
    flexGrow: 2,
  },
  disply: {
    // background: 'white',
      textDecoration: 'none',
      color: 'black'
  }
};

function Navbar (props) {
  const { classes } = props;
  return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Grid item xs={8}>
                <Typography variant="title" color="inherit">
                  <Link to="/" className={classes.disply}>
                    <Header />
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
                <Link to="/events/" className={classes.disply}>
                  Events
                </Link>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>
                <Link to="/" className={classes.disply}>
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
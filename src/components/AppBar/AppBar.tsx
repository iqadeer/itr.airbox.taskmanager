import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1),
      color: 'white',
    },
    activeLink: {
      textDecoration: 'underline',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  })
);

export default function ApdAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            <Link activeClassName={classes.activeLink} className={classes.link} component={RouterLink} exact to='/'>
              Airbox Task Manager
            </Link>
          </Typography>

          <Typography>
            <Link
              activeClassName={classes.activeLink}
              className={classes.link}
              component={RouterLink}
              to='/multiple-tasks'
              exact>
              Manage multiple tasks
            </Link>
            <Link
              activeClassName={classes.activeLink}
              className={classes.link}
              component={RouterLink}
              exact
              to='/organisation-tasks'>
              Manage organisation tasks
            </Link>
            <Link
              activeClassName={classes.activeLink}
              className={classes.link}
              component={RouterLink}
              exact
              to='/individual-tasks'>
              Manage individual tasks
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

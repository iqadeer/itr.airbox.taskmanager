import React from 'react';
import { Grid, Button, Snackbar, TextField } from '@material-ui/core';
import useStyles from './useStyles';
import GetAllIcon from '@material-ui/icons/GetApp';

import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useGetCallersLatestTask from './useGetCallersLatestTask';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={16} variant='filled' {...props} />;
};
const GetCallersLatestTask = () => {
  const classes = useStyles({});
  const {
    openSnackBar,
    closeSnackBar,
    message,
    severity,
    handleSubmit,
    error,
    state,
    handleChange,
  } = useGetCallersLatestTask();
  return (
    <>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              error={!!error.organisationId}
              helperText={error.organisationId}
              placeholder='Organisation id'
              autoComplete='Organisation id'
              name='organisationId'
              variant='outlined'
              fullWidth
              id='organisationId'
              value={state.organisationId}
              onChange={handleChange}
              label='Organisation id'
            />
          </Grid>
        </Grid>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              error={!!error.callerId}
              helperText={error.callerId}
              placeholder='Caller id'
              autoComplete='Caller id'
              name='callerId'
              variant='outlined'
              fullWidth
              id='callerId'
              value={state.callerId}
              onChange={handleChange}
              label='Caller id'
            />
          </Grid>
        </Grid>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              error={!!error.accessId}
              helperText={error.accessId}
              placeholder='Access id'
              autoComplete='Access id'
              name='accessId'
              variant='outlined'
              fullWidth
              id='accessId'
              value={state.accessId}
              onChange={handleChange}
              label='access id'
            />
          </Grid>
        </Grid>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={12} md={6}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              startIcon={<GetAllIcon />}
              className={classes.submit}>
              Get caller's latest task
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        key={`top,center`}
        open={openSnackBar}
        onClose={closeSnackBar}>
        <Alert onClose={closeSnackBar} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default GetCallersLatestTask;

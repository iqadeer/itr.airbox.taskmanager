import React from 'react';
import { Grid, Button, Snackbar, TextField } from '@material-ui/core';
import useStyles from './useStyles';
import GetAllIcon from '@material-ui/icons/GetApp';

import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useGetAllOrganisationTasks from './useGetAllOrganisationTasks';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={16} variant='filled' {...props} />;
};
const GetAllOrganisationTasks = () => {
  const classes = useStyles({});
  const {
    openSnackBar,
    closeSnackBar,
    message,
    severity,
    handleSubmit,
    organisation,
    handleChange,
    error,
  } = useGetAllOrganisationTasks();
  return (
    <>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              error={!!error}
              helperText={error}
              placeholder='Organisation id'
              autoComplete='Organisation id'
              name='organisationId'
              variant='outlined'
              fullWidth
              id='organisationId'
              value={organisation}
              onChange={handleChange}
              label='Organisation id'
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
              Get all organisation tasks
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

export default GetAllOrganisationTasks;

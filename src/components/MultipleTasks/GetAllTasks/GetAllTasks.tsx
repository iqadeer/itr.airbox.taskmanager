import React from 'react';
import { Grid, Button, Snackbar } from '@material-ui/core';
import useStyles from './useStyles';
import GetAllIcon from '@material-ui/icons/GetApp';

import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useGeAllTasks from './useGetAllTasks';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={16} variant='filled' {...props} />;
};
const GetAllTasks = () => {
  const classes = useStyles({});
  const { openSnackBar, closeSnackBar, message, severity, handleSubmit } = useGeAllTasks();
  return (
    <>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={12} md={6}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              startIcon={<GetAllIcon />}
              className={classes.submit}>
              Get all task
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

export default GetAllTasks;

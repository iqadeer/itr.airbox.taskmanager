import React from 'react';
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Snackbar,
} from '@material-ui/core';
import useStyles from './useStyles';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useGetOrDeleteTask from './useGetOrDeleteTask';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={16} variant='filled' {...props} />;
};
const GetOrDeleteTask = () => {
  const classes = useStyles({});
  const {
    abxTaskId,
    abxTaskIdError,
    openOrCloseDialog,
    openCancelDialog,
    handleChange,
    handleGet,
    deleteTask,
    openSnackBar,
    closeSnackBar,
    message,
    severity,
  } = useGetOrDeleteTask();
  return (
    <>
      <form className={classes.form} noValidate>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              autoFocus
              error={!!abxTaskIdError}
              placeholder='Airbox taskId'
              autoComplete='Airbox taskId'
              name='abxTaskId'
              variant='outlined'
              required
              fullWidth
              id='abxTaskId'
              value={abxTaskId}
              onChange={handleChange}
              label='Airbox taskId'
              helperText={abxTaskIdError}
            />
          </Grid>
        </Grid>

        <Grid container justify='center' alignItems='center'>
          <Grid item xs={12} md={6}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              startIcon={<UpdateIcon />}
              onClick={handleGet}
              id='getTask'
              className={classes.submit}>
              Get task
            </Button>
            <Button
              type='button'
              variant='outlined'
              color='primary'
              startIcon={<DeleteIcon />}
              onClick={() => openOrCloseDialog(true)}
              id='deleteTask'
              className={classes.cancel}>
              Delete task
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={openCancelDialog} onClose={() => openOrCloseDialog(false)} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Confirm delete</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete Airbox task with id {abxTaskId}? </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteTask} color='primary'>
            Confirm
          </Button>
          <Button onClick={() => openOrCloseDialog(false)} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
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

export default GetOrDeleteTask;

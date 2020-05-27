import React from 'react';
import { Grid, Button, TextField, Snackbar } from '@material-ui/core';
import useStyles from './useStyles';
import UpdateIcon from '@material-ui/icons/Update';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useUpdateTask from './useUpdateTask';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={16} variant='filled' {...props} />;
};
const UpdateTask = () => {
  const classes = useStyles({});
  const {
    handleSubmit,
    handleChange,
    openSnackBar,
    closeSnackBar,
    message,
    severity,
    updateTaskState: state,
    updateTaskStateError: error,
  } = useUpdateTask();
  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              autoFocus
              error={!!error.abxTaskId}
              placeholder='Abx task id'
              autoComplete='Abx task id'
              name='abxTaskId'
              variant='outlined'
              required
              fullWidth
              id='abxTaskId'
              value={state.abxTaskId}
              onChange={handleChange}
              label='Abx task id'
              helperText={error.abxTaskId}
            />
          </Grid>
        </Grid>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              placeholder='Organisation task id'
              autoComplete='Organisation task id'
              name='organisationTaskId'
              variant='outlined'
              fullWidth
              id='organisationTaskId'
              value={state.organisationTaskId}
              onChange={handleChange}
              label='Organisation task id'
            />
          </Grid>
        </Grid>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
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
          <Grid item xs={12} md={6}>
            <TextField
              placeholder='Priority'
              autoComplete='Priority'
              name='priority'
              variant='outlined'
              fullWidth
              id='priority'
              value={state.priority}
              onChange={handleChange}
              label='Priority'
            />
          </Grid>
        </Grid>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              placeholder='Task status'
              autoComplete='Task status'
              name='taskStatus'
              variant='outlined'
              fullWidth
              id='taskStatus'
              value={state.taskStatus}
              onChange={handleChange}
              label='Task status'
            />
          </Grid>
        </Grid>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              placeholder='Assigned to'
              autoComplete='Assigned to'
              name='assignedTo'
              variant='outlined'
              fullWidth
              id='assignedTo'
              value={state.assignedTo}
              onChange={handleChange}
              label='Assigned to'
            />
          </Grid>
        </Grid>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              placeholder='latitude'
              autoComplete='latitude'
              name='latitude'
              variant='outlined'
              fullWidth
              id='latitude'
              value={state.latitude}
              onChange={handleChange}
              label='latitude'
            />
          </Grid>
        </Grid>{' '}
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              placeholder='longitude'
              autoComplete='longitude'
              name='longitude'
              variant='outlined'
              fullWidth
              id='longitude'
              value={state.longitude}
              onChange={handleChange}
              label='longitude'
            />
          </Grid>
        </Grid>{' '}
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              placeholder='Task summary'
              autoComplete='Task summary'
              name='taskSummary'
              variant='outlined'
              fullWidth
              id='taskSummary'
              value={state.taskSummary}
              onChange={handleChange}
              label='Task summary'
            />
          </Grid>
        </Grid>{' '}
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              placeholder='Task description'
              autoComplete='Task description'
              name='taskDescription'
              variant='outlined'
              fullWidth
              id='taskDescription'
              value={state.taskDescription}
              onChange={handleChange}
              label='Task description'
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
              className={classes.submit}>
              Update task
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

export default UpdateTask;

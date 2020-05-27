import React from 'react';
import {
  Grid,
  Button,
  TextField,
  Snackbar,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import useStyles from './useStyles';
import CreateIcon from '@material-ui/icons/Add';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useCreateMultipleTasks from './useCreateMultipleTasks';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={16} variant='filled' {...props} />;
};
const CreateMultipleTasks = () => {
  const classes = useStyles({});
  const {
    handleCreateFromQueue,
    handleChange,
    openSnackBar,
    closeSnackBar,
    message,
    severity,
    updateTaskState: state,
    updateTaskStateError: error,
    handleAddToQueue,
    createQueue,
  } = useCreateMultipleTasks();
  return (
    <>
      <form className={classes.form} noValidate>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              error={!!error.organisationTaskId}
              helperText={error.organisationTaskId}
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
          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={4}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              onClick={handleAddToQueue}
              startIcon={<CreateIcon />}
              className={classes.submit}>
              Add task to create queue
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              onClick={handleCreateFromQueue}
              startIcon={<CreateIcon />}
              className={classes.submit}>
              Create tasks from queue
            </Button>
          </Grid>
        </Grid>
        {createQueue.length > 0 && (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left'>Sr No.</TableCell>
                  <TableCell align='left'>Organisation task id</TableCell>
                  <TableCell align='left'>Organisation id</TableCell>
                  <TableCell align='left'>Priority</TableCell>
                  <TableCell align='left'>Task status</TableCell>
                  <TableCell align='left'> Assigned to</TableCell>
                  <TableCell align='left'>Latitude</TableCell>
                  <TableCell align='left'>Longitude</TableCell>
                  <TableCell align='left'>Task summary</TableCell>
                  <TableCell align='left'>Task description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {createQueue.map((task, index) => (
                  <TableRow key={index}>
                    <TableCell align='left'>{index + 1}</TableCell>
                    <TableCell align='left'>{task.organisationTaskId}</TableCell>
                    <TableCell align='left'>{task.organisationId}</TableCell>
                    <TableCell align='left'>{task.priority}</TableCell>
                    <TableCell align='left'>{task.taskStatus}</TableCell>
                    <TableCell align='left'>{task.assignedTo}</TableCell>
                    <TableCell align='left'>{task.latitude}</TableCell>
                    <TableCell align='left'>{task.longitude}</TableCell>
                    <TableCell align='left'>{task.taskSummary}</TableCell>
                    <TableCell align='left'>{task.taskDescription}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
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

export default CreateMultipleTasks;

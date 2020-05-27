import React from 'react';
import {
  CssBaseline,
  Container,
  Avatar,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import useStyles from './useStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMultipleTasks from './useMultipleTasks';
import GetAllTasks from './GetAllTasks/GetAllTasks';
import CreateMultipleTasks from './CreateMultipleTasks/CreateMultipleTasks';

const MultipleTasks = () => {
  const classes = useStyles({});
  const { expanded, handleChange } = useMultipleTasks();
  return (
    <>
      <CssBaseline />
      <Container component='main' maxWidth='md'>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Manage multiple tasks
          </Typography>
        </div>
      </Container>
      <Container>
        <ExpansionPanel expanded={expanded === 'get'} onChange={handleChange('get')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls='geta-content' id='geta-header'>
            <Typography className={classes.heading}>Get all tasks</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <GetAllTasks></GetAllTasks>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'update'} onChange={handleChange('update')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls='updatea-content' id='updatea-header'>
            <Typography className={classes.heading}>Create set of tasks</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CreateMultipleTasks></CreateMultipleTasks>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    </>
  );
};

export default MultipleTasks;

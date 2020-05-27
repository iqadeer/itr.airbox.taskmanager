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
import GetOrDeleteTask from './GetOrDeleteTask/GetOrDeleteTask';
import UpdateTask from './UpdateTask/UpdateTask';
import useIndividualTasks from './useIndividualTasks';

const IndividualTasks = () => {
  const classes = useStyles({});
  const { expanded, handleChange } = useIndividualTasks();
  return (
    <>
      <CssBaseline />
      <Container component='main' maxWidth='md'>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Manage individual airbox tasks
          </Typography>
        </div>
      </Container>
      <Container>
        <ExpansionPanel expanded={expanded === 'get'} onChange={handleChange('get')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls='geta-content' id='geta-header'>
            <Typography className={classes.heading}>Get or delete individual tasks</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <GetOrDeleteTask></GetOrDeleteTask>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'update'} onChange={handleChange('update')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls='updatea-content' id='updatea-header'>
            <Typography className={classes.heading}>Update individual task</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <UpdateTask></UpdateTask>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    </>
  );
};

export default IndividualTasks;

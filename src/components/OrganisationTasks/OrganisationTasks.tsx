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
import GetAllOrganisationTasks from './GetAllOrganisationTasks/GetAllOrganisationTasks';
import GetAllCallerTasks from './GetAllCallerTasks/GetAllCallerTasks';
import useOrganisationTasks from './useOrganisationTasks';
import GetCallersLatestTask from './GetCallersLatestTask/GetCallersLatestTask';

const OrganisationTasks = () => {
  const classes = useStyles({});
  const { expanded, handleChange } = useOrganisationTasks();
  return (
    <>
      <CssBaseline />
      <Container component='main' maxWidth='md'>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Manage organisation tasks
          </Typography>
        </div>
      </Container>
      <Container>
        <ExpansionPanel expanded={expanded === 'get'} onChange={handleChange('get')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls='geta-content' id='geta-header'>
            <Typography component='h2' variant='h5' className={classes.heading}>
              Get all tasks for organisation
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <GetAllOrganisationTasks></GetAllOrganisationTasks>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'update'} onChange={handleChange('update')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls='updatea-content' id='updatea-header'>
            <Typography className={classes.heading}>Get tasks for caller</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <GetAllCallerTasks></GetAllCallerTasks>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'latest'} onChange={handleChange('latest')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls='latesta-content' id='latesta-header'>
            <Typography className={classes.heading}>Get caller's latest task</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <GetCallersLatestTask></GetCallersLatestTask>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    </>
  );
};

export default OrganisationTasks;

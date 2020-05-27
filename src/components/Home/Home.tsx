import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  return (
    <Container>
      <Grid container justify='center' alignItems='center' spacing={2}>
        <Grid item xs={12} md={10}>
          <Typography variant='h4'>Welcome to Airbox task manager</Typography>
          <Typography variant='h6'>Choose the links above to manage apropriate tasks</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

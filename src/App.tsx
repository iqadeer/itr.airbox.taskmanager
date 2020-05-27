import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import ApdAppBar from './components/AppBar/AppBar';
import Home from './components/Home/Home';
import IndividualTasks from './components/IndividualTasks/IndividualTasks';
import MultipleTasks from './components/MultipleTasks/MultipleTasks';
import OrganisationTasks from './components/OrganisationTasks/OrganisationTasks';
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <>
      <ApdAppBar></ApdAppBar>
      <Switch>
        <Route path='/individual-tasks' component={IndividualTasks}></Route>
        <Route path='/multiple-tasks' component={MultipleTasks}></Route>
        <Route path='/organisation-tasks' component={OrganisationTasks}></Route>
        <Route path='/pagenotfound' component={PageNotFound}></Route>
        <Route path='/' exact component={Home}></Route>
        <Redirect to='/pagenotfound'></Redirect>
      </Switch>
    </>
  );
};

export default App;

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import PupilLanding from './components/layouts/PupilLanding';
import MentorLanding from './components/layouts/MentorLanding';
import PupilRegister from './components/auth/PupilRegister';
import MentorRegister from './components/auth/MentorRegister';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Route exact path='/pupil-landing' component={PupilLanding} />
      <Route exact path='/mentor-landing' component={MentorLanding} />
      <section className='container'>
        <Switch>
          <Route exact path='/pupil-register' component={PupilRegister} />
          <Route exact path='/mentor-register' component={MentorRegister} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;

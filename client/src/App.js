import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import PupilLanding from './components/layout/PupilLanding';
import MentorLanding from './components/layout/MentorLanding';
import PupilRegister from './components/auth/PupilRegister';
import MentorRegister from './components/auth/MentorRegister';
import MentorLogin from './components/auth/MentorLogin';
import PupilLogin from './components/auth/PupilLogin';
import Alert from './components/layout/Alert';

//Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Route exact path='/pupil-landing' component={PupilLanding} />
        <Route exact path='/mentor-landing' component={MentorLanding} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/pupil-register' component={PupilRegister} />
            <Route exact path='/mentor-register' component={MentorRegister} />
            <Route exact path='/pupil-login' component={PupilLogin} />
            <Route exact path='/mentor-login' component={MentorLogin} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;

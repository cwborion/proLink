import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

// Pupil
import PupilLanding from './components/layout/PupilLanding';
import PupilRegister from './components/auth/PupilRegister';
import PupilLogin from './components/auth/PupilLogin';
import PupilDashboard from './components/dashboard/PupilDashboard';
import CreatePupilProfile from './components/profile-forms/CreatePupilProfile';

// Mentor
import MentorLanding from './components/layout/MentorLanding';
import MentorRegister from './components/auth/MentorRegister';
import MentorLogin from './components/auth/MentorLogin';
import MentorDashboard from './components/dashboard/MentorDashboard';
import CreateMentorProfile from './components/profile-forms/CreateMentorProfile';

import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadPupilUser, loadMentorUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadPupilUser());
    store.dispatch(loadMentorUser());
  }, []);

  return (
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
              <PrivateRoute
                exact
                path='/pupil-dashboard'
                component={PupilDashboard}
              />
              <PrivateRoute
                exact
                path='/mentor-dashboard'
                component={MentorDashboard}
              />
              <PrivateRoute
                exact
                path='/create-pupil-profile'
                component={CreatePupilProfile}
              />
              <PrivateRoute
                exact
                path='/create-mentor-profile'
                component={CreateMentorProfile}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

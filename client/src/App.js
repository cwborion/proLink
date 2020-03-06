import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Pupil
import PupilLanding from './components/layout/PupilLanding';

// Mentor
import MentorLanding from './components/layout/MentorLanding';

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
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/pupil-landing' component={PupilLanding} />
            <Route exact path='/mentor-landing' component={MentorLanding} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

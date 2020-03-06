import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pupil
import PupilRegister from '../auth/PupilRegister';
import PupilLogin from '../auth/PupilLogin';
import PupilDashboard from '../dashboard/PupilDashboard';
import CreatePupilProfile from '../profile-forms/CreatePupilProfile';
import EditPupilProfile from '../profile-forms/EditPupilProfile';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';

// Mentor
import MentorRegister from '../auth/MentorRegister';
import MentorLogin from '../auth/MentorLogin';
import MentorDashboard from '../dashboard/MentorDashboard';
import CreateMentorProfile from '../profile-forms/CreateMentorProfile';
import EditMentorProfile from '../profile-forms/EditMentorProfile';

import NotFound from '../layout/NotFound';
import Alert from '../layout/Alert';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = props => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/pupil-register' component={PupilRegister} />
        <Route exact path='/mentor-register' component={MentorRegister} />
        <Route exact path='/pupil-login' component={PupilLogin} />
        <Route exact path='/mentor-login' component={MentorLogin} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
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
        <PrivateRoute
          exact
          path='/edit-pupil-profile'
          component={EditPupilProfile}
        />
        <PrivateRoute
          exact
          path='/edit-mentor-profile'
          component={EditMentorProfile}
        />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;

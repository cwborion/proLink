import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import {
  pupilGetCurrentProfile,
  deletePupilAccount
} from '../../actions/profile';

const Dashboard = ({
  pupilGetCurrentProfile,
  deletePupilAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    pupilGetCurrentProfile();
  }, [pupilGetCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <div>
            <h2>Your goal -</h2>
            <p>{profile.goal}</p>
          </div>
          <br />
          <div className='dash-buttons'>
            <Link to='/edit-pupil-profile' className='btn btn-light'>
              <i className='fas fa-user-circle text-primary'></i> Edit Profile
            </Link>
          </div>
          <div className='my-2'>
            <button
              className='btn btn-danger'
              onClick={() => deletePupilAccount()}
            >
              <i className='fas fa-user-minus'></i>Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-pupil-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  pupilGetCurrentProfile: PropTypes.func.isRequired,
  deletePupilAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {
  pupilGetCurrentProfile,
  deletePupilAccount
})(Dashboard);

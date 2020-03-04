import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import {
  mentorGetCurrentProfile,
  deleteMentorAccount
} from '../../actions/profile';

const MentorDashboard = ({
  mentorGetCurrentProfile,
  deleteMentorAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    mentorGetCurrentProfile();
  }, [mentorGetCurrentProfile]);
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
            <h2>Your profile information -</h2>
            <p>Title: {profile.title}</p>
            <p>Contact Email: {profile.contactEmail}</p>
            <p>Availability: {profile.availability}</p>
            <p>Bio: {profile.bio}</p>
          </div>
          <br />
          <div className='dash-buttons'>
            <Link to='/edit-mentor-profile' className='btn btn-light'>
              <i className='fas fa-user-circle text-primary'></i> Edit Profile
            </Link>
          </div>
          <div className='my-2'>
            <button
              className='btn btn-danger'
              onClick={() => deleteMentorAccount()}
            >
              <i className='fas fa-user-minus'></i>Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-mentor-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

MentorDashboard.propTypes = {
  mentorGetCurrentProfile: PropTypes.func.isRequired,
  deleteMentorAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {
  mentorGetCurrentProfile,
  deleteMentorAccount
})(MentorDashboard);

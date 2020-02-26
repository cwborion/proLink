import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mentorGetCurrentProfile } from '../../actions/profile';

const MentorDashboard = ({ mentorGetCurrentProfile, auth, profile }) => {
  useEffect(() => {
    mentorGetCurrentProfile();
  }, []);
  return <div>Mentor Dashboard</div>;
};

MentorDashboard.propTypes = {
  mentorGetCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { mentorGetCurrentProfile })(
  MentorDashboard
);

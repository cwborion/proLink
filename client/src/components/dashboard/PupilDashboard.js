import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pupilGetCurrentProfile } from '../../actions/profile';

const Dashboard = ({ pupilGetCurrentProfile, auth, profile }) => {
  useEffect(() => {
    pupilGetCurrentProfile();
  }, []);
  return <div>Pupil Dashboard</div>;
};

Dashboard.propTypes = {
  pupilGetCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { pupilGetCurrentProfile })(Dashboard);

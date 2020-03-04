import React from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    user: { name }
  }
}) => (
  <div class='profile-about bg-light p-2'>
    <h2 class='text-primary'>{name}s Bio</h2>
    <p>{bio}</p>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.func.isRequired
};

export default ProfileAbout;

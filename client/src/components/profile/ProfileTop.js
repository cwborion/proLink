import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    availability,
    title,
    contactEmail,
    user: { name }
  }
}) => {
  return (
    <div class='profile-top bg-primary p-2'>
      <h1 class='large'>{name}</h1>
      <p class='lead'>Professional Title: {title}</p>
      <p class='lead'>Contact Email: {contactEmail}</p>
      <p class='lead'>Availability: {availability}</p>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;

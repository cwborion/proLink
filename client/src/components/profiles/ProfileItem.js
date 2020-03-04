import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name },
    availability,
    title,
    contactEmail,
    bio
  }
}) => {
  return (
    <div className='profile bg-light'>
      <div>
        <h2>{name}</h2>
        <p className='my-1'>{title}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;

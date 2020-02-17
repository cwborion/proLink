import React from 'react';
import { Link } from 'react-router-dom';

const MentorLanding = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>ProLink</h1>
          <p className='lead'>
            Are you already a mentor on ProLink, or are you a returning user?
          </p>
          <div className='buttons'>
            <Link to='/mentor-register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/mentor-login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorLanding;

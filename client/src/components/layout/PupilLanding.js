import React from 'react';
import { Link } from 'react-router-dom';

const PupilLanding = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>ProLink</h1>
          <p className='lead'>
            Find a mentor here! Do you already have an account, or are you a
            returning user?
          </p>
          <div className='buttons'>
            <Link to='/pupil-register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/pupil-login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PupilLanding;

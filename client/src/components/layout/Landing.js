import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>ProLink</h1>
          <p className='lead'>
            Find a mentor to aid in your professional career path. Please select
            if you are a mentor or pupil
          </p>
          <div className='buttons'>
            <Link to='/mentor-landing' className='btn btn-primary'>
              Mentor
            </Link>
            <Link to='/pupil-landing' className='btn btn-primary'>
              Pupil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

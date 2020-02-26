import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreatePupilProfile = props => {
  const [formData, setFormData] = useState({
    goal: ''
  });

  const { goal } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's define your purpose and goal for
        using this service
      </p>
      <small>* = required field</small>
      <form className='form'>
        <textarea
          placeholder='*Your goal/mission'
          name='goal'
          value={goal}
          onChange={e => onChange(e)}
        ></textarea>
        <small className='form-text'>
          Tell us what your overall goal/accomplishment is for working with a
          mentor. What would you like to have accomplished through this
          experience?
        </small>
        <input type='submit' className='btn btn-primary my-1' />
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

CreatePupilProfile.propTypes = {};

export default connect()(CreatePupilProfile);

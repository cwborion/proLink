import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPupilProfile } from '../../actions/profile';

const CreatePupilProfile = ({ createPupilProfile, history }) => {
  const [formData, setFormData] = useState({
    goal: ''
  });

  const { goal } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createPupilProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's define your purpose and goal for
        using this service
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
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
        <Link className='btn btn-light my-1' to='/pupil-dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreatePupilProfile.propTypes = {
  createPupilProfile: PropTypes.func.isRequired
};

export default connect(null, { createPupilProfile })(
  withRouter(CreatePupilProfile)
);

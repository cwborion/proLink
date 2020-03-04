import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  createMentorProfile,
  mentorGetCurrentProfile
} from '../../actions/profile';

const EditMentorProfile = ({
  profile: { profile, loading },
  createMentorProfile,
  mentorGetCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    availability: '',
    title: '',
    contactEmail: '',
    bio: ''
  });

  useEffect(() => {
    mentorGetCurrentProfile();

    setFormData({
      availability:
        loading || !profile.availability ? '' : profile.availability,
      title: loading || !profile.title ? '' : profile.title,
      contactEmail:
        loading || !profile.contactEmail ? '' : profile.contactEmail,
      bio: loading || !profile.bio ? '' : profile.bio
    });
  }, [loading, mentorGetCurrentProfile]);

  const { availability, title, contactEmail, bio } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createMentorProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div class='form-group'>
          <select
            name='availability'
            value={availability}
            onChange={e => onChange(e)}
          >
            <option value='0'>* Are you currently available to mentor? </option>
            <option value='Available'>Available</option>
            <option value='Unavailable'>Unavailable</option>
          </select>
          <small class='form-text'>
            Decide here if you are open to mentoring someone, or even more than
            one person if you would like
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='*Title'
            name='title'
            value={title}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Current professional title</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='*Contact Email'
            name='contactEmail'
            value={contactEmail}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            An email address you'd prefer to be contacted on by a potential
            pupil
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='*A short bio of yourself'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text'>
            Tell us a little about yourself (e.g. Areas of knowledge, work
            history, availability, etc...)
          </small>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/mentor-dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditMentorProfile.propTypes = {
  createMentorProfile: PropTypes.func.isRequired,
  mentorGetCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  createMentorProfile,
  mentorGetCurrentProfile
})(withRouter(EditMentorProfile));

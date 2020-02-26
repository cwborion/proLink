import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current PUPIL users profile
export const pupilGetCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/pupil/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//

//                          *** ABOVE: PUPIL ------ BELOW: MENTOR ***

//

// Get current MENTOR users profile
export const mentorGetCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/mentor/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

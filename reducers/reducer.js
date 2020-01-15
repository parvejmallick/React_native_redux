import constants from '../constants';
import createReducer from './createReducer';

const {
  CURRENT_STATE,
} = constants;

const initialValues = {
  routeName : true,
  isLoading: false,
};

export default createReducer(initialValues, {

  [CURRENT_STATE]: (state, { details }) => {
    return {
      routeName: details
    };
  },
  
});
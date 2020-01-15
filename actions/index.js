
import constants from '../constants';
import Api from '../service/Api';

const {
  CURRENT_STATE,
} = constants;

export const updateState = (details) => ({
  type: CURRENT_STATE,
  details
});


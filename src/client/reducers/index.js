import { combineReducers } from 'redux';
import artists from './artists';

const artistSearchApp = combineReducers({
  artists,
});

export default artistSearchApp;

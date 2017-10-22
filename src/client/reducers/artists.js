import { DEFAULT_ARTISTS } from '../constants/DefaultArtists.js';
import { SEARCH_RECEIVED } from '../constants/ActionTypes.js';

const initialState = DEFAULT_ARTISTS;

const artists = (state = initialState, action) => {
  // TODO: Only storing artists in an array for now.
  // Create an artistById hashmap if we want to add additional features such
  // as an on hover event where users can follow/like the individual artists.
  switch(action.type) {
    case SEARCH_RECEIVED:
      return action.artists;
    default:
      return state;
  }
};

export default artists;

import React from 'react';
import { DEFAULT_SEARCH_OPTIONS } from '../constants/SearchParams.js';
import Api from '../utils/Api.js';

const receiveSearchResults = results => {
  const artists = createArtistsArrayFromResults(results);

  return {
    type: 'SEARCH_RECEIVED',
    artists,
  }
}

const createArtistsArrayFromResults = results => {
  const firstSixArtists = results.artists.slice(0,6);
  const artists = firstSixArtists.map(artist => {
    return {
      name: artist.artistName,
      imageUrl: `http://iscale.iheart.com/catalog/artist/${artist.artistId}?ops=fit(250,0)`,
    }
  });

  return artists;
};

export const search = keywords => {
  return async dispatch => {
    const api = new Api();
    const searchResponse = await api.search(keywords);
    const parsedResponse = await searchResponse.json();

    dispatch(receiveSearchResults(parsedResponse));
  }
}

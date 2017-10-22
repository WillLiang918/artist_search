import Api from '../utils/Api';

const createArtistsArrayFromResults = (results) => {
  const firstSixArtists = results.artists.slice(0, 6);
  const artists = firstSixArtists.map(artist => ({
    name: artist.artistName,
    imageUrl: `http://iscale.iheart.com/catalog/artist/${artist.artistId}?ops=fit(250,0)`,
  }));

  return artists;
};

const receiveSearchResults = (results) => {
  const artists = createArtistsArrayFromResults(results);

  return {
    type: 'SEARCH_RECEIVED',
    artists,
  };
};

export const search = keywords => async (dispatch) => {
  const api = new Api();
  const searchResponse = await api.search(keywords);
  const parsedResponse = await searchResponse.json();

  dispatch(receiveSearchResults(parsedResponse));
};

export default search;

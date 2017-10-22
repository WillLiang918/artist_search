import 'whatwg-fetch';
import param from 'jquery-param';
import { DEFAULT_SEARCH_OPTIONS } from '../constants/SearchParams';

export default class Api {
  constructor(host = 'http://us.api.iheart.com/api/v1') {
    this.host = host;
  };

  search(keywords) {
    const path = 'catalog/searchAll';
    const searchOptions = {
      ...DEFAULT_SEARCH_OPTIONS,
      keywords,
    };
    const queryParams = param(searchOptions);
    const searchUrl = `${this.host}/${path}?${queryParams}`;

    return fetch(searchUrl, {
      headers: {
        'Accept': 'application/json'
      }
    });
  };
};

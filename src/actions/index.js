import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_PAGE = 'fetch_page';

const ROOT_URL = 'http://directus.wearegodigital.com/api/1.1';
const API_KEY = '?access_token=6uwoArMAt54ivonkErdmFlgJwiZE1TvP';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPage(name) {
  const request = axios.get(`${ROOT_URL}/tables/${name}/rows/${API_KEY}`)/*.then(response => {
            console.log(response.data);
          });*/
  return {
    type: FETCH_PAGE,
    payload: request
  };
}

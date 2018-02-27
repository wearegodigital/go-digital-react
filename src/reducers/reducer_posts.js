import { FETCH_POSTS, FETCH_PAGE } from '../actions';
import _ from 'lodash';

export default function (state={}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data,'id');
    case FETCH_PAGE:
      /* ES5 SYNTAX
        const post = action.payload.data;
        const newState = {...state } ;
        newState[post.id] = post;
        return newState; */
      return {...state, [action.payload.data.meta.table]: action.payload.data.data[0]};
    default:
      return state;
  }
}

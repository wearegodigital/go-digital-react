import { FETCH_PAGES, FETCH_PAGE } from '../actions';

export default function (state={}, action) {
  switch (action.type) {
    case FETCH_PAGES:
      return {...state, [action.payload.data.meta.table]: action.payload.data.data};
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

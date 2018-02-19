import _ from "lodash";

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      //ES5 way
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      // ...state returns all the previous posts fetched
      // Square Brackets DO NOT CREATE ARRAY, they create a new key to be added to the state
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case DELETE_POSTS:
      // Creates new state with id of deleted post removed entirely
      return _.omit(state, action.payload);

    default:
      return state;
  }
}

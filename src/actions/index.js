import axios from "axios";

export const FETCH_POSTS = "fetch_posts";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=abishr123";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  // console.log(`Request is ${request}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

import { FETCH_POST, NEW_POST } from "./types";

export const fetchPosts = () => dispactch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>
      dispactch({
        type: FETCH_POST,
        payload: data
      })
    );
};

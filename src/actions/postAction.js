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

export const createPost = postData => dispactch => {
  console.log('hello');
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data => dispactch({
      type:NEW_POST,
      payload:data
    }));
};

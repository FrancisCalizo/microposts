import { http } from './http.js';
import { ui } from './ui.js';

// Load Posts on Page Load
window.addEventListener('DOMContentLoaded', e => {
  http
    .get('http://localhost:3000/Posts')
    .then(data => {
      ui.showPosts(data);
    })
    .catch(err => console.log(err));
});

// Create New Post
document.querySelector('.post-submit').addEventListener('click', e => {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  const data = { title: title, body: body };

  http
    .post('http://localhost:3000/posts', data)
    .then(response => console.log(response))
    .catch(err => console.log(err));
});

import { http } from './http.js';
import { ui } from './ui.js';

// On Page Load Event
window.addEventListener('DOMContentLoaded', getPosts);

// Load and Show Posts
function getPosts() {
  http
    .get('http://localhost:3000/Posts')
    .then(data => {
      ui.showPosts(data);
    })
    .catch(err => console.log(err));
}

// On Form Submit Event
document.querySelector('.post-submit').addEventListener('click', createPost);

// Create New Post and Show
function createPost() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  const data = { title: title, body: body };

  http
    .post('http://localhost:3000/posts', data)
    .then(data => {
      getPosts();
      ui.clearForm();
    })
    .catch(err => console.log(err));
}

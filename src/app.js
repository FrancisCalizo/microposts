import { http } from './http.js';
import { ui } from './ui.js';

// On Page Load Event
window.addEventListener('DOMContentLoaded', getPosts);
// On Form Submit Event
document.querySelector('.post-submit').addEventListener('click', createPost);
// Click Delete Post Event
document.getElementById('posts').addEventListener('click', removePost);

// Load and Show Posts
function getPosts() {
  http
    .get('http://localhost:3000/Posts')
    .then(data => {
      ui.showPosts(data);
    })
    .catch(err => console.log(err));
}

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
      ui.showAlert('Post Added', 'alert alert-success');
    })
    .catch(err => console.log(err));
}

// Remove Post
function removePost(e) {
  const postCard = e.target.parentElement.parentElement.parentElement;
  console.log(e.target);
  if (e.target.classList.contains('delete')) {
    postCard.remove();
  }
}

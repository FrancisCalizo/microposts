import { http } from './http.js';
import { ui } from './ui.js';
// On Page Load Event
window.addEventListener('DOMContentLoaded', getPosts);
// On Form Submit Event
document.querySelector('.post-submit').addEventListener('click', createPost);
// Click Delete Post Event
document.getElementById('posts').addEventListener('click', removePost);
// Click Update Post Form Event
document.getElementById('posts').addEventListener('click', editPost);
// Click Cancel Update
document.querySelector('.card-form').addEventListener('click', cancelEdit);
//Click Update Post
document.querySelector('.card-form').addEventListener('click', updatePost);

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
function createPost(e) {
  if (e.target.classList.contains('post-submit')) {
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
}

// Remove Post
function removePost(e) {
  // Remove From UI
  const postCard = e.target.parentElement.parentElement.parentElement;

  if (e.target.classList.contains('delete')) {
    postCard.remove();
    // Delete API Request
    const cardId = e.target.parentElement.dataset.id;

    http
      .delete(`http://localhost:3000/posts/${cardId}`)
      .then(data => console.log(data))
      .catch(err => console.log(err));

    // Show Alert
    ui.showAlert('Post has been deleted', 'alert alert-danger');
  }

  e.preventDefault();
}

// Edit Post Form
function editPost(e) {
  if (e.target.classList.contains('edit')) {
    console.log(ui.formState);
    const postCard = e.target.parentElement.parentElement.parentElement;
    const postTitle = e.target.parentElement.children[0].innerHTML;
    const postBody = e.target.parentElement.children[1].innerHTML;
    const postId = e.target.dataset.id;

    const editData = {
      title: postTitle,
      body: postBody,
      id: postId
    };

    ui.editForm(editData);
    console.log('editPost called');
    ui.changeFormState('edit');
  }

  e.preventDefault();
}

// Cancel Edit Form
function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
}

// Confirm Update Post
function updatePost(e) {
  if ((ui.formState = 'edit')) {
    if (e.target.classList.contains('post-update')) {
      console.log(e.target.parentElement.children);

      const updatedData = {
        id: ui.idInput.value,
        title: ui.titleInput.value,
        body: ui.bodyInput.value
      };

      http
        .put(`http://localhost:3000/posts/${updatedData.id}`, updatedData)
        .then(data => {
          ui.changeFormState('add');
          ui.showAlert('Post Updated', 'alert alert-success');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
}

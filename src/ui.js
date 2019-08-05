class UI {
  constructor() {
    this.posts = document.getElementById('posts');
    this.titleInput = document.getElementById('title');
    this.bodyInput = document.getElementById('body');
    this.idInput = document.getElementById('id');
    this.postSubmit = document.querySelector('.post-submit');
    this.formState = 'add';
  }

  showPosts(posts) {
    let output = '';

    posts.forEach(post => {
      output += `
        <div class='card mb-3'>
          <div class='card-body'>
            <h4 class='card-title'>${post.title}</h4>
            <p class='card-text'>${post.body}</p>
            <a href="#" class='edit card-link' data-id=${post.id}>
              <i class="fa fa-pencil"></i>
            </a>
            <a href='#' class='remove card-link' data-id=${post.id}>
              <i class='fa fa-remove delete'></i>
            </a>
          </div>
        </div>
      `;
    });
    this.posts.innerHTML = output;
  }

  clearForm() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
    this.idInput.value = '';
  }

  showAlert(message, className) {
    const alert = document.createElement('div');
    alert.classList = className;
    alert.textContent = message;
    const parent = document.querySelector('.posts-container');
    parent.insertBefore(alert, this.posts);

    // Remove after three seconds
    setTimeout(() => {
      parent.removeChild(alert);
    }, 3000);
  }

  // Fill Form For Edit
  editForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;
  }

  // Change State of Form
  changeFormState(state) {
    if (state === 'edit') {
      this.formState = 'edit';

      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-update btn btn-warning btn-block';

      const cancel = document.createElement('button');
      cancel.className = 'post-cancel btn btn-light btn-block';
      cancel.textContent = 'Cancel';

      const parent = document.querySelector('.card-form');
      parent.appendChild(cancel);
    } else {
      this.formState = 'add';

      this.clearForm();

      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';

      const cancel = document.querySelector('.post-cancel');
      const parent = document.querySelector('.card-form');
      parent.removeChild(cancel);
    }
  }
}

export const ui = new UI();

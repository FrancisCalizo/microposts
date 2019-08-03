class UI {
  constructor() {
    this.title = document.getElementById('title');
    this.body = document.getElementById('body');
    this.posts = document.getElementById('posts');
  }

  getPosts(post) {
    const card = document.createElement('div');
    card.classList = 'card card-body';
    this.posts.appendChild(card);

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = post.title;
    card.appendChild(cardTitle);

    const cardBody = document.createElement('p');
    cardBody.textContent = post.body;
    card.appendChild(cardBody);
  }
}

export const ui = new UI();

import { http } from './http.js';
import { ui } from './ui.js';

http
  .get('http://localhost:3000/Posts')
  .then(data => {
    data.forEach(post => {
      ui.getPosts(post);
    });
  })
  .catch(err => console.log(err));

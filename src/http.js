class EasyHTTP {
  // Define a GET Request
  async get(url) {
    const promise = await fetch(url);
    const response = await promise.json();

    return response;
  }

  // Define a POST Request
  async post(url, data) {
    const promise = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const response = await promise.json();
    return response;
  }

  // Define a PUT Request
  async put(url, data) {
    const promise = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const response = await promise.json();
    return response;
  }

  // Define a DELETE Request
  async delete(url, data) {
    const promise = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

    const response = await 'User has been deleted';
    return response;
  }
}

export const http = new EasyHTTP();

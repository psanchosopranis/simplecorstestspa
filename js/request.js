// GET Request
function getRequest() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

// POST Request
function postRequest() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}
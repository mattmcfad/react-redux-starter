import 'whatwg-fetch';

export const BASE_URL = 'http://localhost:8080/api';

export function post(path, data) {
  return fetch(BASE_URL + path, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json());
}

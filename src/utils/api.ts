const baseUrl = 'localhost:8000/api'

export default {
  post: (url: string, body: object) =>
    fetch(baseUrl + url, {
      method: 'POST',
      body: JSON.stringify(body)
    }).then(res => res.json()),
  get: (url: string, body: object) =>
    fetch(baseUrl + url, {
      method: 'GET',
      body: JSON.stringify(body)
    }).then(res => res.json())
}
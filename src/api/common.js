// GET
export function get(url, options) {
  return loadJson("GET", url, undefined, options);
}

// POST
export function post(url, payload, options) {
  return loadJson("POST", url, payload, options);
}

// loadJSON
function loadJson(method, url, payload, options) {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json"
    },
    // convert the JSON with JSON.stringify(payload)
    body: payload ? JSON.stringify(payload) : undefined,
    method,
    ...options
  })
    .then(async (response) => {
      if (response.ok) return response.json();

      throw new Error(
        `Request failed: ${response.status} ${response.statusText} ${response.url}`
      );
    })
    .catch((error) => console.error(error));
}

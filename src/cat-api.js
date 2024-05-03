const BASE_URL = 'https://api.thecatapi.com/v1';

const API_KEY =
  'live_Z8lL77cjoZLfd2UvxwrLQnP1bRublM80aqt0lhYP6HrYa11IXPUFd421MmM7D3Xr';

export function fetchbreeds() {
  return fetch(`${BASE_URL}/breeds`, {
    headers: {
      api_key: API_KEY,
    },
  }).then(res => {
    if (res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}

export function fetchCatByBreed(breedid) {
  return fetch(`${BASE_URL}/images/search`, {
    headers: {
      api_key: API_KEY,
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}

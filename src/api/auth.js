/**
 * Logs the user in.
 * @param {{email: string, password: string}} user
 * @returns
 */
export async function login({ email, password }) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }

  // TODO: Save the auth token on the front-end (i.e. in a cookie or local storage)

  return true;
}

export async function signup({ username, email, password }) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/signup`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ username, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }

  // TODO: Save the auth token on the front-end (i.e. in a cookie or local storage)

  return true;
}

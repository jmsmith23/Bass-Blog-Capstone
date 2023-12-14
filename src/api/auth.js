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

  return await response.json();
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

  return await response.json();
}

export async function getCurrentUser() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/current`,
    {
      method: 'GET',
      // Send the browser's cookies with this request
      credentials: 'include',
    }
  );

  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }

  return await response.json();
}

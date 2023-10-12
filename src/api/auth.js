/**
 * Logs the user in.
 * @param {{email: string, password: string}} user
 * @returns
 */
export async function login({ email, password }) {
  const response = await fetch(`${import.meta.env.API_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  return true;
}

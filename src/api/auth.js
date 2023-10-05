export async function login(user) {
  const response = await fetch(`/users/login`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  return true;
}

export async function createPost() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({}),
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

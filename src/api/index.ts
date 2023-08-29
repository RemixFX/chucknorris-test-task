async function checkResponse<T>(res: { ok: boolean; json: () => Promise<T> }): Promise<T> {
  if (res.ok) {
    return res.json() as Promise<T>
  }
  const message = await res.json();
  return await Promise.reject(message);
}

export async function getJokes(query: string) {
  const res = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return checkResponse(res);
}
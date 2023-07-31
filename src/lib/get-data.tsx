
export async function getRandomPhotos(pageNo: number) {
  const res = await fetch(
    `${"https://api.unsplash.com"}/photos?client_id=${"9ZYpYzQEL0dAohdAf6Vk1nczpQ554Naxdx0y_mFnYPg"}&page=${pageNo}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getUserProfile(username: string) {
  const res = await fetch(
    `${process.env.UNSPLASH_API}/users/${username}?client_id=${process.env.UNSPLASH_CLIENT_ID}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

import { Repo } from '@/types';
import { env } from '@/validations/env';

export const getRepos = async (): Promise<Repo[]> => {
  const ACCESS_TOKEN = env.GH_ACCESS_TOKEN;

  if (!ACCESS_TOKEN) {
    throw new Error('No github access token');
  }

  const res = await fetch('https://api.github.com/users/nilotpaul/repos?sort=created&per_page=5', {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error('Error fetching repos');
  }

  return res.json();
};

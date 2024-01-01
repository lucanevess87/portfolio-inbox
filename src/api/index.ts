'use server';

import { Repository } from './types';

export async function getRepositories(): Promise<Array<Repository>> {
  const res = await fetch('https://api.github.com/users/lucanevess87/repos', {
    cache: 'force-cache',
    next: {
      revalidate: 86400000,
      tags: ['repos'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

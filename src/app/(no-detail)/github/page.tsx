import clsx from 'clsx';
import Link from 'next/link';

import { getRepositories } from '@/api';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function GithubPage() {
  const data = await getRepositories();

  return (
    <div className="flex flex-col justify-start w-full h-full">
      <div className="flex p-3 border-t border-b items-center justify-between">
        <h1 className="text-lg font-bold">Github</h1>
        <Button variant="link">
          <Link href="https://github.com/lucanevess87">check out my github page</Link>
        </Button>
      </div>

      <div className="flex flex-col h-full gap-3 p-3 pb-16 overflow-y-auto">
        {data?.map((repo) => {
          return (
            <Card
              className={clsx(
                'py-2 cursor-pointer dark:hover:bg-zinc-800 dark:hover:bg-opacity-25 hover:bg-zinc-100',
              )}
              key={repo.id}
            >
              <CardHeader className="px-4 py-2">
                <CardTitle className="font-bold text-md">{repo.name}</CardTitle>
                <CardDescription className="text-sm font-normal">{repo.full_name}</CardDescription>
              </CardHeader>
              <CardContent className="px-4 py-2">
                <p className="text-sm font-normal text-justify opacity-80 line-clamp-2">
                  {repo.description}
                </p>
              </CardContent>
              <CardFooter className="px-4 py-2">
                {repo.language && <Badge>{repo.language}</Badge>}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

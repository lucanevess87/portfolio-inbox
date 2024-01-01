'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useDetailContext } from '@/context/useDetailContext';
import { projects } from '@/lib/mockData';

export const MainContent = () => {
  const { setContent, content } = useDetailContext();
  const [search, setSearch] = useState<string>('');

  const filteredProjects = projects.filter(({ title }) =>
    title.toUpperCase().includes(search.toUpperCase()),
  );

  return (
    <div className="flex flex-col justify-start w-full h-full">
      <div className="flex p-3 border-t border-b">
        <h1 className="text-lg font-bold">Projects</h1>
      </div>

      <div className="flex flex-col h-full gap-3 p-3">
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="flex flex-col h-full gap-3 pb-16 overflow-y-auto">
          {filteredProjects.map((project) => {
            return (
              <Card
                className={clsx(
                  'py-2 cursor-pointer dark:hover:bg-zinc-800 hover:bg-zinc-100',
                  project?.id === content?.id && 'dark:bg-zinc-800 bg-zinc-100',
                )}
                key={project.id}
                onClick={() => {
                  if (content?.id === project.id) {
                    setContent(null);
                  } else setContent(project);
                }}
              >
                <CardHeader className="px-4 py-2">
                  <CardTitle className="font-bold text-md">{project.title}</CardTitle>
                  <CardDescription className="text-sm font-normal ">
                    {project.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 py-2">
                  <p className="text-sm font-normal text-justify opacity-80 line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="gap-2 px-4 py-2">
                  {project.tags.map((tag, index) => {
                    return <Badge key={`${tag}-${index}`}>{tag}</Badge>;
                  })}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

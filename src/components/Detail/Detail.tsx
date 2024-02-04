'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useDetailContext } from '@/context/useDetailContext';

export const Detail = () => {
  const { content } = useDetailContext();

  return (
    <div
      className={clsx('flex flex-col w-full h-full', content ? 'justify-start' : 'justify-center')}
    >
      {content ? (
        <>
          <div className="flex p-3 border-t border-b">
            <h1 className="text-lg font-bold">Detail</h1>
          </div>
          <div className="flex items-center gap-4 p-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h3 className="font-bold text-md">{content?.title}</h3>
              <h4 className="text-sm font-normal">{content?.subtitle}</h4>
            </div>
          </div>

          <div className="flex gap-1 p-3 border-b">
            {content?.tags.map((tag, index) => {
              return <Badge key={`${tag}-${index}`}>{tag}</Badge>;
            })}
          </div>

          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex flex-col gap-1 p-3">
              <h4 className="text-sm font-bold">Description</h4>
              <p className="text-sm font-normal text-justify opacity-80">{content?.description}</p>
            </div>

            <div className="flex flex-col gap-2 p-3">
              <h4 className="text-sm font-bold">Images</h4>
              {content?.images.map((image, index) => {
                return (
                  <Image
                    key={`${image}-${index}`}
                    alt={image}
                    src={image}
                    width={450}
                    height={450}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center w-full p-4">
          <Card className="w-full py-2">
            <CardHeader className="px-4 py-2">
              <CardTitle className="font-bold text-md">Select any project</CardTitle>
              <CardDescription className="text-sm font-normal ">
                Select any project from the project list
              </CardDescription>
            </CardHeader>
            <CardFooter className="gap-2 px-4 py-2">
              <Badge>select</Badge>
              <Badge>project</Badge>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

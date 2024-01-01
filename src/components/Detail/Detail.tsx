'use-client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useDetailContext } from '@/context/useDetailContext';

export const Detail = () => {
  const { content } = useDetailContext();
  return (
    <div className="flex flex-col justify-start w-full h-full">
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

      <div className="flex flex-col gap-1 p-3">
        <h4 className="text-sm font-bold">Description</h4>
        <p className="text-sm font-normal opacity-80">{content?.description}</p>
      </div>

      <div className="flex flex-col gap-1 p-3">
        <h4 className="text-sm font-bold">Images</h4>
        <p className="text-sm font-normal opacity-80">{content?.description}</p>
      </div>
    </div>
  );
};

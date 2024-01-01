'use client';

import { Fragment } from 'react';

import { Detail } from '@/components/Detail';
import { MainContent } from '@/components/MainContent';
import { ResizableHandle, ResizablePanel } from '@/components/ui/resizable';
import { useDetailContext } from '@/context/useDetailContext';

export default function Home() {
  const { content } = useDetailContext();

  return (
    <Fragment>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={content ? 45 : 80}>
        <MainContent />
      </ResizablePanel>

      {content && (
        <Fragment>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={35}>
            <Detail />
          </ResizablePanel>
        </Fragment>
      )}
    </Fragment>
  );
}

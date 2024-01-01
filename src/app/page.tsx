import { Fragment } from 'react';

import { Detail } from '@/components/Detail';
import { MainContent } from '@/components/MainContent';
import { ResizableHandle, ResizablePanel } from '@/components/ui/resizable';

export default function Home() {
  return (
    <Fragment>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={45}>
        <MainContent />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={35}>
        <Detail />
      </ResizablePanel>
    </Fragment>
  );
}

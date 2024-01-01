import { Fragment } from 'react';

import { ResizableHandle, ResizablePanel } from '@/components/ui/resizable';

export default function AboutMePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>{children}</ResizablePanel>
    </Fragment>
  );
}

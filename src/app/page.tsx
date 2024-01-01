import { Sidebar } from '@/components/Sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default function Home() {
  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-[100vh] border rounded-lg">
      <ResizablePanel defaultSize={20}>
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>
        <div className="flex items-start h-full p-6 justify-start-center">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>
        <div className="flex items-start h-full p-6 justify-start-center">
          <span className="font-semibold">Detail</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

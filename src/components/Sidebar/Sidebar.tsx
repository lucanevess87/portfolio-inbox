'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { sideBarTabs } from '@/lib/mockData';

export const Sidebar = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col w-full">
        <div className="flex p-3 border-t border-b">
          <h1 className="text-lg font-bold">InboxFolio</h1>
        </div>
        <div className="flex p-3 border-b">
          <span className="w-full font-semibold">
            <section className="w-full">
              <Select onValueChange={(value) => setTheme(value)} defaultValue="system">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </section>
          </span>
        </div>
        <div className="flex flex-col p-4 border-b">
          <ToggleGroup type="single" className="flex flex-col w-full">
            {sideBarTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <ToggleGroupItem
                  key={tab.id}
                  value={tab.id}
                  aria-label={`Toggle ${tab.id}`}
                  className="flex w-full"
                >
                  <Link href={tab.path} className="flex w-full gap-2">
                    <Icon className="w-4 h-4" />
                    <p>{tab.label}</p>
                  </Link>
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

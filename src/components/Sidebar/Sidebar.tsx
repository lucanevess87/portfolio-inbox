'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sideBarTabs } from '@/lib/mockData';
import { cn } from '@/lib/utils';

export const Sidebar = () => {
  const pathname = usePathname();
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
          <div className="flex flex-col w-full">
            {sideBarTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.id}
                  href={tab.path}
                  className={cn(
                    'flex w-full py-2 px-4 rounded-md gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-700 dar:hover:bg-opacity-25',
                    {
                      'dark:bg-zinc-800 dark:bg-opacity-25 bg-zinc-100 ': pathname === tab.path,
                    },
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <p>{tab.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

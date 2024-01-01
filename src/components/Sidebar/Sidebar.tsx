import { FolderOpen, Github, Linkedin, Phone, Shapes, UserRound } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { ToggleMode } from '../ToggleMode';

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col w-full">
        <div className="flex p-4 border-t border-b">
          <span className="w-full font-semibold">
            <section className="w-full">
              <Select>
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
            <ToggleGroupItem value="projects" aria-label="Toggle projects" className="flex w-full">
              <div className="flex w-full gap-2">
                <FolderOpen className="w-4 h-4" />
                <p>Projects</p>
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="skills" aria-label="Toggle skills" className="flex w-full">
              <div className="flex w-full gap-2">
                <Shapes className="w-4 h-4" />
                <p>Skills</p>
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="about" aria-label="Toggle about" className="flex w-full">
              <div className="flex w-full gap-2">
                <UserRound className="w-4 h-4" />
                <p>About me</p>
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="contact" aria-label="Toggle contact" className="flex w-full">
              <div className="flex w-full gap-2">
                <Phone className="w-4 h-4" />
                <p>Contact</p>
              </div>
            </ToggleGroupItem>

            <ToggleGroupItem value="github" aria-label="Toggle github" className="flex w-full">
              <div className="flex w-full gap-2">
                <Github className="w-4 h-4" />
                <p>Github</p>
              </div>
            </ToggleGroupItem>

            <ToggleGroupItem value="linkedin" aria-label="Toggle linkedin" className="flex w-full">
              <div className="flex w-full gap-2">
                <Linkedin className="w-4 h-4" />
                <p>Linkedin</p>
              </div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <ToggleMode />
    </div>
  );
};

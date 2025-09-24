'use client';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { PlusIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function ProjectNameCard() {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border bg-background shadow-xs">
      {/* Header */}
      <div className="p-6 pb-2 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Project Name</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            This is the name of your project. For example, “My Project”.
          </p>
        </div>
        <div className="shrink-0">
          <Button
            variant="outline"
            onClick={() =>
              toast('Project added!', {
                description: 'Your project has been added successfully',
                position: 'top-right',
                action: {
                  label: 'Undo',
                  onClick: () => {
                    toast.dismiss();
                  },
                },
              })
            }
          >
            <PlusIcon className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Add New Project</span>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-2">
        <label htmlFor="projectName" className="sr-only">
          Project name
        </label>
        <Input
          className="md:w-100 w-full"
          id="projectName"
          placeholder="My Project..."
        />
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-border" />

      {/* Bottom muted bar */}
      <div className="flex justify-between bg-muted/40 px-6 py-3 text-sm text-muted-foreground">
        <div className="flex items-center">
          Please use 32 characters at maximum.
        </div>
        <div className="">
          <Button
            onClick={() =>
              toast('Project saved!', {
                description: 'Your project has been saved successfully',
                position: 'top-right',
              })
            }
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

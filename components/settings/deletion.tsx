'use client';

import React from 'react';
import { Button } from '../ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { toast } from 'sonner';

const Deletion = () => {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border bg-background shadow-xs mt-8">
      {/* Header */}
      <div className="p-6 pb-4">
        <h3 className="text-xl font-semibold">Delete Account</h3>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-sm text-muted-foreground">
              This is the deletion of your account. Be careful, this action is
              irreversible.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-border" />

      {/* Bottom muted bar */}
      <div className="flex justify-between bg-muted/40 px-6 py-5 text-sm text-muted-foreground">
        <div className="flex items-center">Click here to delete.</div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() =>
                  toast.success('Account deleted', {
                    description: 'Your account has been deleted successfully',
                    position: 'top-right',
                  })
                }
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Deletion;

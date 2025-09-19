'use client';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { toast } from 'sonner';

export default function CredentialsCard() {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border bg-background shadow-xs mt-8">
      {/* Header */}
      <div className="p-6 pb-2">
        <h3 className="text-xl font-semibold">Credentials</h3>
        <p className="mt-4 text-sm text-muted-foreground">
          This is the credentials of your project. For example, “My Project”.
        </p>
      </div>

      {/* Content */}
      <div className="p-6 pt-4 ">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="flex flex-col gap-2 md:mb-4">
            <Label htmlFor="changePassword" className="text-sm">
              Change Password
            </Label>
            <Input
              className="md:w-100 w-full"
              id="changePassword"
              placeholder="Change Password..."
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 md:mt-0">
            <Label htmlFor="confirmPassword" className="text-sm">
              Confirm Password
            </Label>
            <Input
              className="md:w-100 w-full"
              id="confirmPassword"
              placeholder="Confirm Password..."
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-border" />

      {/* Bottom muted bar */}
      <div className="flex justify-between bg-muted/40 px-6 py-3 text-sm text-muted-foreground">
        <div className="flex items-center">Please use 8 characters at minimum.</div>
        <div className="">
          <Button
            onClick={() =>
              toast('Password changed!', {
                description: 'Your password has been changed successfully',
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

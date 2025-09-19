import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function AvatarCard() {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border bg-background shadow-xs mt-8">
      {/* Header */}
      <div className="p-6 pb-4">
        <h3 className="text-xl font-semibold">Avatar</h3>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-sm text-muted-foreground">This is the avatar.</p>
            <p className="text-sm text-muted-foreground">
              Click on the avatar to upload a custom one from your files
            </p>
          </div>
          <div className="flex items-center mb-2">
            <Avatar className="size-20">
              <AvatarImage src="https://github.com/jeffreychery009.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-border" />

      {/* Bottom muted bar */}
      <div className="flex justify-between bg-muted/40 px-6 py-5 text-sm text-muted-foreground">
        <div className="flex items-center">An avatar is optional but recommended</div>
      </div>
    </div>
  );
}

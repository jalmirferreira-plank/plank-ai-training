import * as React from "react";

import { Button } from "@/components/ui/button";

export function Navbar(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-md bg-primary" />
          <span className="text-sm font-semibold">Flashcard</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
            Early access
          </span>
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
}

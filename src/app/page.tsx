import * as React from "react";
import { FileText, FileUp, Link } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main className="bg-hero-glow flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center">
        <section className="mx-auto w-full max-w-3xl px-6 pt-10 text-center md:pt-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            AI-powered - Spaced repetition
          </div>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Turn your notes into flashcards you actually review.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Paste your notes, upload a PDF, or drop a URL. We generate
            flashcards and schedule them so you actually remember.
          </p>
          <form className="mx-auto mt-8 flex max-w-md gap-2">
            <Input
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
              className="flex-1"
            />
            <Button size="default">Get early access</Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            No spam. Product updates and early access only.
          </p>
        </section>

        <div className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 px-6 pb-8 sm:grid-cols-3 md:pb-10">
          <div className="rounded-2xl bg-muted/50 p-5">
            <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileText className="size-4" />
            </div>
            <p className="text-sm font-medium">Text input</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Paste any notes or content directly
            </p>
          </div>
          <div className="rounded-2xl bg-muted/50 p-5">
            <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileUp className="size-4" />
            </div>
            <p className="text-sm font-medium">PDF ingestion</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Upload documents, planned next
            </p>
          </div>
          <div className="rounded-2xl bg-muted/50 p-5">
            <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Link className="size-4" />
            </div>
            <p className="text-sm font-medium">URL capture</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Import from any web page, planned next
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

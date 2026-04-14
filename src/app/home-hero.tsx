'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function HomeHero() {
  const [email, setEmail] = React.useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="w-full max-w-4xl bg-card/80 p-8 shadow-sm backdrop-blur-sm sm:p-12">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Welcome</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          A simple homepage for your project
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Use this space to introduce your product and collect interest from visitors.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl rounded-2xl border border-border/80 bg-background/90 p-5 shadow-sm sm:p-6">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email address"
          placeholder="you@company.com"
          hint="Share your email and we will get in touch soon."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button type="submit" className="w-full sm:flex-1">
            Submit
          </Button>
          <Button type="button" variant="outline" className="w-full sm:flex-1">
            Learn more
          </Button>
        </div>
      </form>
    </section>
  )
}

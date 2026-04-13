# Next.js TypeScript Project Setup Design

**Date:** 2026-04-13  
**Project:** plank-ai-train

---

## Overview

A full-stack web application built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, Prisma, and PostgreSQL.

---

## Architecture

- **Framework:** Next.js 14+ with App Router and React Server Components
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL via Prisma ORM
- **Data access:** Server-side only — via Server Actions or Route Handlers. No DB calls in client components.

---

## Directory Structure

```
plank-ai-train/
├── src/
│   ├── app/                  # App Router pages & layouts
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── api/              # Route handlers (REST endpoints)
│   ├── components/           # Shared UI components
│   ├── lib/
│   │   ├── db.ts             # Prisma client singleton
│   │   └── utils.ts          # Shared utilities
│   └── actions/              # Server Actions
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
├── .env.local                # DATABASE_URL, secrets (not committed)
├── .env.example              # Committed template for env vars
├── tailwind.config.ts
└── next.config.ts
```

---

## Tooling & Configuration

- **TypeScript:** strict mode enabled
- **ESLint:** `eslint-config-next` (Next.js default)
- **Prettier:** with `prettier-plugin-tailwindcss` for class sorting
- **Prisma:** `prisma generate` to sync client, `prisma migrate dev` for schema changes
- **Environment:** `.env.local` holds `DATABASE_URL` and other secrets; `.env.example` is committed with placeholder values

---

## Testing

- **Unit/Integration:** Vitest — faster than Jest, native ESM support
- **Component:** React Testing Library
- **E2E:** None to start; Playwright can be added later

---

## Out of Scope

- Authentication (can be added later, e.g. NextAuth)
- CI/CD pipeline
- Deployment configuration
- E2E tests

# AI Flashcard Engine

AI Flashcard Engine is an all-in-one learning workflow: upload content, generate study cards, review with spaced repetition, and track progress in one place.

The goal is to support any learner based on the material they upload, whether that material is text, PDFs, or URLs.

## Product Idea

- Ingest learning content from text, PDF, or URL
- Use AI to generate Anki-style flashcards
- Schedule reviews with spaced repetition
- Add voice reading support for multimodal study
- Surface learning progress in a dashboard

## Current Status

This project is currently in **scaffold stage**.

- The repository contains a modern Next.js baseline
- Core AI flashcard features are planned but not implemented yet
- README describes the intended product direction

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- `shadcn/ui` starter components
- ESLint + Prettier
- GitHub Actions CI (`lint` + `build`)

## Local Development

Install dependencies and start the app:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
npm run lint
npm run check
npm run build
npm run start
npm run format
```

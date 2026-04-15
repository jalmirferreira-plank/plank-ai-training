<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# AGENTS Operating Contract

This file defines strict rules for AI agents working in this repository.
Agents must follow these rules unless the user gives an explicit instruction that overrides them.

## 1) Project Context

- Product direction: AI Flashcard Engine.
- Current stage: scaffold stage.
- Do not present planned features as already implemented.
- When describing status, separate clearly:
  - what exists now in code
  - what is planned next

## 2) Instruction Priority and Source of Truth

Use this precedence order:

1. Direct user request in the current conversation
2. This `AGENTS.md`
3. Repository docs (including `README.md`)
4. Agent defaults

Non-negotiable behavior:

- Preserve user edits.
- Do not revert unrelated changes.
- Do not use destructive git commands unless explicitly requested.
- Do not invent completed work, test results, or integrations.

## 3) Next.js Guardrails

- Treat framework behavior as version-specific.
- Before changing framework-level behavior, consult docs in:
  - `node_modules/next/dist/docs/`
- Follow current App Router conventions used by this repository.
- Respect deprecation warnings and avoid introducing deprecated patterns.

## 4) Architecture and Code Organization

- Keep `src/` as the primary source directory.
- Keep modules focused and single-purpose.
- Separate concerns explicitly:
  - UI rendering/components
  - domain/business logic
  - shared utilities
- Avoid large mixed-responsibility files when a split improves clarity.
- Follow existing folder and naming patterns before introducing new structure.

## 5) Implementation Standards

- Use TypeScript-first, explicit, readable code.
- Prefer small, composable functions.
- Use comments only for non-obvious logic or constraints.
- Keep imports clean and avoid dead code.
- Prefer existing UI primitives and conventions before adding new abstractions.
- Avoid hidden side effects; make data flow explicit.

## 6) Quality Gates Before Claiming Completion

For meaningful code changes, run and report relevant checks:

- Prefer `npm run check` as the default validation gate (runs lint + build together).
- `npm run lint`
- `npm run build`
- Focused tests when test suites exist for touched areas

Rules:

- Report actual command outcomes.
- If a check was not run, state it explicitly with reason.
- Do not claim "done" while required checks are failing.

## 7) Product-Specific Guardrails (AI Flashcard Engine)

For flashcard features, agents must make boundaries and assumptions explicit:

- Ingestion sources: text, PDF, URL
- Card generation behavior: expected reproducibility and limits
- Spaced repetition logic: correctness over convenience
- Progress metrics: define how values are calculated and updated

If any of these are not implemented yet:

- mark as planned
- do not imply production readiness

## 8) Security and Data Handling

- Never commit secrets, tokens, or credentials.
- Never commit private user-provided study content.
- Minimize logging of user content and sensitive payloads.
- Call out new external AI/API dependencies explicitly in change notes.
- Prefer least-privilege defaults for configuration and integrations.

## 9) Delivery Workflow

- Keep changes scoped, incremental, and reviewable.
- Match the existing coding style and repository patterns.
- Update docs when setup, behavior, or product positioning changes.
- Provide concise verification notes with each delivered change.

## 10) Definition of Done

A task is done only when all conditions below are true:

- Changes are implemented and aligned with project architecture.
- Required validations were run (or explicitly deferred with reason).
- Documentation is updated when relevant.
- Known limitations, risks, and follow-ups are clearly stated.

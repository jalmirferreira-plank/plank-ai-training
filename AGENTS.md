

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.



## Pull Request Readiness Gate

Before creating any pull request, first remove superpowers documentation under `docs/superpowers`.

Before creating any pull request, always run both checks and ensure they pass:

0. `docs/superpowers` cleanup
  - Delete superpowers documentation files under `docs/superpowers` before opening the PR.

1. `pr-review-trio`
  - Run the full trio review (bug, performance, security).  
  - Resolve or explicitly acknowledge any findings before PR creation.
2. `pre-deploy`
  - Run the pre-deployment quality gate.  
  - Do not open a PR unless the result is `Overall: PASS`.

If either check fails, fix issues first and re-run both checks before creating the PR.
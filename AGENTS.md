# Project workflow

- This is a static Astro site. Use `npm run build` to check the production build.
- Keep changes focused and preserve existing user work.

## Browser reviews

- Use the installed Playwright CLI through `npm run browser -- <command>`. Do not build one-off browser harnesses or long inline scripts for routine visual checks.
- Use the `playwright-cli` skill in `.agents/skills/playwright-cli/SKILL.md` for browser workflows. The CLI automatically reads `.playwright/cli.config.json`.
- The user should run `npm run dev` in a separate terminal. Use `http://localhost:3000`, unless the running server reports a different address. Do not leave an unmanaged development server running from an agent command.
- Open the site with `npm run browser -- open http://localhost:3000`. Use `snapshot`, `click`, `resize`, `screenshot`, and `console error` for focused checks.
- Inspect desktop and mobile widths when changing layout. Keep screenshots in `.playwright-cli/`, which is gitignored.
- Take a new snapshot before using element references after navigation or page updates.
- Close the project's session with `npm run browser -- close` when finished. Do not close other browser sessions.
- Browser installation/control may require sandbox approval. Request the necessary permission transparently. If authorization is denied or unavailable, report browser checks as unverified rather than retrying with larger scripts.
- External CDN failures can prevent HTMX interactions. Distinguish a visual check from a successful interaction check.

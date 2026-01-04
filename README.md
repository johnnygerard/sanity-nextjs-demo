# Sanity demo with Next.js

This demo project shows how to integrate [Sanity](https://www.sanity.io) with a [Next.js](https://nextjs.org) application using the following configuration:

- Embedded Sanity Studio
- Next.js static rendering with ISR (no dynamic rendering)
- Sanity Content Lake API: `api.sanity.io` (uncached API)

## Tech Stack

### Frontend

- **UI library**: [React 19](https://react.dev/)
- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

### Backend

- **CDN**: [Vercel](https://vercel.com/docs/cdn)
- **Headless CMS**: [Sanity](https://www.sanity.io/)

### Quality Assurance

- **Unit testing**: [Vitest](https://vitest.dev/)
- **End-to-end testing**: [Playwright](https://playwright.dev/)

## How to Update

To check for outdated packages, run `npm outdated`.

```bash
# Update dependencies (this will rewrite package-lock.json and package.json)
npm update --save
npm install --save-exact --save-dev prettier@latest prettier-plugin-tailwindcss@latest
```

## Dev Environment & Tools

- **System**: [Ubuntu](https://ubuntu.com/desktop)
- **Editor**: [VS Code](https://code.visualstudio.com/)
- **Formatter**: [Prettier](https://prettier.io/)
- **Linter**: [ESLint](https://eslint.org/)
- **AI assistant**: [GitHub Copilot](https://github.com/features/copilot)

## Copyright

© 2025 Johnny Gérard

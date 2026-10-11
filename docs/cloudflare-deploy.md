# Cloudflare Workers deployment

The Worker name is `english-banua`.

Keep the existing Workers Builds settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

The build command first builds Next.js with standalone output, then packages that
output with OpenNext. Wrangler uses the committed configuration and OpenNext
adapter for deployment; automatic migration is no longer needed.

For local use, `npm run preview` builds and starts the Workers preview, and
`npm run deploy` builds and deploys the application.

All files in `public` must stay below Cloudflare's 25 MiB asset limit.

Setup reference: https://opennext.js.org/cloudflare/get-started

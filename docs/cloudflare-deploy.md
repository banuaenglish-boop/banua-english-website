# Cloudflare Workers deployment

The Worker name is `english-banua`.

For the production branch, use these Workers Builds settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

The build command first builds Next.js with standalone output, then packages that
output with OpenNext. Wrangler uses the committed configuration and OpenNext
adapter for deployment; automatic migration is no longer needed.

For non-production branches using Cloudflare Worker Previews:

- Build command: `npm run build`
- Non-production deploy command: `npx wrangler preview`

Worker Previews require a `previews` block in `wrangler.jsonc`. The committed
configuration declares `previews.images.binding` as `IMAGES`, because Preview
bindings are not inherited from production. Static assets and compatibility
settings remain at the top level.

If the build succeeds but deployment reports a missing `previews` block, use a
commit containing this configuration, then retry the failed Cloudflare build.

Cloudflare may also report a service-binding limitation for
`WORKER_SELF_REFERENCE`. It is separate from the missing-configuration error.
The production self-reference binding is not copied into Previews: Cloudflare
currently routes Preview service bindings to the target Worker's production
deployment, rather than to a matching Preview. Preview cache-revalidation
behavior therefore needs separate runtime verification.

For local use, `npm run preview` builds and starts OpenNext's local Workers
runtime. This differs from the remote `npx wrangler preview` command above.
`npm run deploy` builds and deploys the production application.

All files in `public` must stay below Cloudflare's 25 MiB asset limit.

References:

- [OpenNext setup](https://opennext.js.org/cloudflare/get-started)
- [Worker Previews configuration](https://developers.cloudflare.com/workers/previews/configuration/)
- [Preview service-binding limitations](https://developers.cloudflare.com/workers/previews/resources/#service-bindings)

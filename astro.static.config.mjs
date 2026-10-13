// @ts-check
// Plain static build (no Wix): `STATIC_SITE=1 npx astro build --config astro.static.config.mjs --outDir dist-static`
// Used to publish connectasconsulting.com on GitHub Pages.
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.connectasconsulting.com",
  trailingSlash: "never",
  build: { format: "file" },
  output: "static",
});

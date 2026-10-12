// @ts-check
import { defineConfig } from "astro/config";

// Static site. To host on Wix (like cmrmobility.com), run once:
//   npm create @wix/new@latest -- headless link --business-name "Connectas"
// which adds the Wix integration here and writes wix.config.json.
export default defineConfig({
  site: "https://connectasconsulting.com",
  trailingSlash: "never",
  build: { format: "file" },
});

// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import wix from "@wix/astro";
import wixPages from "@wix/astro-pages";
import wixHostingAdapter from "@wix/astro-wix-hosting-adapter";

// Static site. To host on Wix (like cmrmobility.com), run once:
//   npm create @wix/new@latest -- headless link --business-name "Connectas"
// which adds the Wix integration here and writes wix.config.json.
export default defineConfig({
  site: "https://connectasconsulting.com",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [react(), wix(), wixPages()],
  adapter: wixHostingAdapter(),

  image: {
    domains: ["static.wixstatic.com"],
  },

  output: "server",
});
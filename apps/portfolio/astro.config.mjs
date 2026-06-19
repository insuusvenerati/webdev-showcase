import { defineConfig, sessionDrivers } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.pages.dev",
  output: "static",
  adapter: cloudflare({
    imageService: "compile",
  }),
  session: {
    driver: sessionDrivers.lruCache(),
  },
});

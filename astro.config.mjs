import { defineConfig } from "astro/config";

// https://astro.build/config

import { defineConfig } from "astro/config";
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

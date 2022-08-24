import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://eliteexecscoaching.com",
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        page !== "https://eliteexecscoaching.com/coach-match-1" &&
        page !== "https://eliteexecscoaching.com/coach-match-2" &&
        page !== "https://eliteexecscoaching.com/coach-match-3" &&
        page !== "https://eliteexecscoaching.com/coach-match-4",
    }),
  ],
});

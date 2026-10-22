// @ts-check
import { defineConfig } from "astro/config";
import { codeTitle } from "./src/lib/shiki-code-title.mjs";

export default defineConfig({
  site: "https://andrewnbishop.com",
  // Match the old Gatsby URLs, which had no trailing slash.
  trailingSlash: "never",
  build: { format: "directory" },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
      transformers: [codeTitle()],
    },
  },
});

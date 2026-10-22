// @ts-check
import { defineConfig } from "astro/config";
import { codeTitle } from "./src/lib/shiki-code-title.mjs";

export default defineConfig({
  site: "https://andrewnbishop.com",
  // Match the old Gatsby URLs, which had no trailing slash.
  trailingSlash: "never",
  build: { format: "directory" },
  // Keep whitespace between text and inline tags (e.g. "at <a>Treez</a>").
  compressHTML: false,
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
      transformers: [codeTitle()],
    },
  },
});

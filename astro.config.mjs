// @ts-check
import { defineConfig } from "astro/config";
import { codeTitle } from "./src/lib/shiki-code-title.mjs";

export default defineConfig({
  site: "https://andrewnbishop.com",
  // GitHub Pages serves each page from <path>/index.html and 301-redirects
  // /path to /path/, so link to the trailing-slash form directly.
  trailingSlash: "always",
  build: { format: "directory" },
  // Keep whitespace between text and inline tags (e.g. "at <a>Treez</a>").
  compressHTML: false,
  // The blog is the homepage now; keep old /blog links working.
  redirects: { "/blog": "/" },
  markdown: {
    shikiConfig: {
      // The "-default" variants meet WCAG AA contrast; the classic ones don't.
      themes: { light: "github-light-default", dark: "github-dark-default" },
      defaultColor: false,
      transformers: [codeTitle()],
    },
  },
});

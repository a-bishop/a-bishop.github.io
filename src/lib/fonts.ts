// IBM Plex Sans, Latin characters only (all this site uses).
//
// font-display: optional means the browser never swaps fonts after the text
// is drawn: if a font isn't ready within ~100ms it keeps the fallback for
// that page view and uses Plex from the next page on. Together with the
// preloads in Base.astro, that removes the text reflow some browsers
// (notably iOS Safari) showed with `swap`.
import plex400 from "@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2?url";
import plex400Italic from "@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-italic.woff2?url";
import plex600 from "@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2?url";
import plex700 from "@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-700-normal.woff2?url";

const LATIN =
  "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";

const faces = [
  { url: plex400, weight: 400, style: "normal" },
  { url: plex400Italic, weight: 400, style: "italic" },
  { url: plex600, weight: 600, style: "normal" },
  { url: plex700, weight: 700, style: "normal" },
];

export const fontFaceCss = faces
  .map(
    ({ url, weight, style }) =>
      `@font-face{font-family:"IBM Plex Sans";font-style:${style};font-weight:${weight};` +
      `font-display:optional;src:url(${url}) format("woff2");unicode-range:${LATIN}}`,
  )
  .join("\n");

/** Used above the fold on every page: body text, nav and post titles, headings. */
export const preloadFonts = [plex400, plex600, plex700];

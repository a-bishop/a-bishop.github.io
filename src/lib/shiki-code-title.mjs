/**
 * Shiki transformer: turns ```js title="file.js" into a code block
 * with a filename label above it.
 */
export function codeTitle() {
  return {
    name: "code-title",
    root(hast) {
      const raw = this.options.meta?.__raw ?? "";
      const match = raw.match(/title="([^"]+)"/);
      if (!match) return;
      const pre = hast.children.find((n) => n.type === "element" && n.tagName === "pre");
      if (!pre) return;
      hast.children = [
        {
          type: "element",
          tagName: "figure",
          properties: { className: ["code-figure"] },
          children: [
            {
              type: "element",
              tagName: "figcaption",
              properties: { className: ["code-title"] },
              children: [{ type: "text", value: match[1] }],
            },
            pre,
          ],
        },
      ];
    },
  };
}

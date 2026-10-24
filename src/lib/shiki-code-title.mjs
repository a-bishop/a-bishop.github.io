/**
 * Shiki transformer: turns ```js title="file.js" into a code block
 * with a filename label above it, and gives every code block an
 * accessible name (Astro makes them focusable so they can be scrolled
 * with the keyboard).
 */
const titleOf = (meta) => meta?.__raw?.match(/title="([^"]+)"/)?.[1];

export function codeTitle() {
  return {
    name: "code-title",
    pre(node) {
      const title = titleOf(this.options.meta);
      node.properties.role = "region";
      node.properties.ariaLabel = title ? `Code: ${title}` : `Code: ${this.options.lang}`;
    },
    root(hast) {
      const title = titleOf(this.options.meta);
      if (!title) return;
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
              children: [{ type: "text", value: title }],
            },
            pre,
          ],
        },
      ];
    },
  };
}

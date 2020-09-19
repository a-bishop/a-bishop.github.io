import { tint } from "@theme-ui/color"

const code = {
  "[data-name='live-editor']": {
    fontSize: 1,
    "textarea, pre": {
      padding: (t: any) => `${t.space[3]} !important`,
    },
  },
  "[data-name='live-preview']": {
    padding: (t: any) => `calc(${t.space[2]} + 10px) !important`,
    backgroundColor: tint(`primary`, 0.7),
  },
  ".prism-code": {
    fontSize: [1, 1, 2],
    padding: 3,
    webkitOverflowScrolling: `touch`,
    backgroundColor: `transparent`,
    overflow: `initial`,
    float: `left`,
    minWidth: `100%`,
    mb: 0,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3,
      },
    },
  },
  ".token": {
    display: `inline-block`,
  },
  "p > code, li > code": {
    bg: `gray.3`,
    color: `gray.8`,
    px: 1,
    py: 1,
    borderRadius: `2px`,
  },
  ".gatsby-highlight": {
    fontSize: [1, 1, 2],
    position: `relative`,
    webkitOverflowScrolling: `touch`,
    bg: `rgb(1, 22, 39)`,
    overflow: `auto`,
    borderRadius: `2px`,
    mx: [0, 0, 0, -3],
    ".token-line": {
      mx: -3,
    },
    "pre.language-": {
      mt: 0,
    },
    "pre.language-noLineNumbers": {
      mt: 0,
    },
    'pre[class*="language-"]:before': {
      bg: `green`,
      borderRadius: `0 0 0.25rem 0.25rem`,
      color: `blue`,
      fontSize: `12px`,
      letterSpacing: `0.025rem`,
      padding: `0.1rem 0.5rem`,
      position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      top: 0,
    },
    'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before': {
      background: `#f7df1e`,
      color: `black`,
    },
    'pre[class~="language-jsx"]:before': {
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-ts"]:before': {
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-tsx"]:before': {
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-html"]:before': {
      background: `#005a9c`,
      color: `white`,
    },
    'pre[class~="language-xml"]:before': {
      background: `#005a9c`,
      color: `white`,
    },
    'pre[class~="language-svg"]:before': {
      background: `#005a9c`,
      color: `white`,
    },
    'pre[class~="language-graphql"]:before': {
      background: `#E10098`,
    },
    'pre[class~="language-css"]:before': {
      background: `#ff9800`,
      color: `black`,
    },
    'pre[class~="language-mdx"]:before': {
      background: `#f9ac00`,
      color: `black`,
    },
    'pre[class~="language-text"]:before': {
    },
    "pre[class~='language-shell']:before": {
    },
    "pre[class~='language-sh']:before": {
    },
    "pre[class~='language-bash']:before": {
    },
    "pre[class~='language-yaml']:before": {
      background: `#ffa8df`,
    },
    "pre[class~='language-yml']:before": {
      background: `#ffa8df`,
    },
    "pre[class~='language-markdown']:before": {
    },
    "pre[class~='language-json']:before, pre[class~='language-json5']:before": {
      background: `linen`,
    },
    "pre[class~='language-diff']:before": {
      background: `#e6ffed`,
    },
  },
  '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`,
  },
  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`,
  },
  ".code-title": {
    backgroundColor: tint(`primary`, 0.7),
    color: `black`,
    fontSize: 0,
    px: 3,
    py: 2,
    fontFamily: `monospace`,
    mx: [0, 0, 0, -3],
  },
  "[data-name='live-preview'], [data-name='live-editor']": {
    mx: [0, 0, 0, -3],
    fontSize: [1, 1, 2],
  },
  ".token-line": {
    pr: 3,
  },
  ".highlight-line": {
    backgroundColor: `rgb(2, 55, 81)`,
    borderLeft: `4px solid rgb(2, 155, 206)`,
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`,
    },
  },
}

export default code
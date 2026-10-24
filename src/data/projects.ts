export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo?: string;
  /** Shows an "In progress" label on the card. */
  inProgress?: boolean;
}

/** Shown as cards, in this order. */
export const projects: Project[] = [
  {
    title: "Lyric Lang",
    description:
      "An API that turns song lyrics into language lessons. It pulls out vocabulary, slang, grammar patterns and cultural notes, then builds a study plan with exercises and spaced review.",
    tech: ["Cloudflare Workers", "Hono", "D1", "AI SDK"],
    repo: "https://github.com/a-bishop/lyric-lang",
    inProgress: true,
  },
  {
    title: "Remix Cloudflare Starter",
    description:
      "An opinionated Remix starter for Cloudflare, with Google sign-in, D1 and KV storage, and Drizzle ORM.",
    tech: ["Remix", "Cloudflare", "Drizzle", "Vitest"],
    repo: "https://github.com/a-bishop/remix-cloudflare-starter",
  },
  {
    title: "Circle of Fifths",
    description: "A simple, handy tool for learning the circle of fifths.",
    tech: ["Svelte", "CSS custom properties"],
    demo: "/svelte-circle-of-fifths/",
    repo: "https://github.com/a-bishop/svelte-circle-of-fifths",
  },
  {
    title: "Drum Machine",
    description:
      "A drum machine and arpeggiator built with Tone.js and lit-element, a base class for creating Web Components.",
    tech: ["Tone.js", "Web Components"],
    demo: "/drum-machine/",
    repo: "https://github.com/a-bishop/drum-machine",
  },
  {
    title: "Movies To Watch",
    description: "A web app to save and share movie recommendations, using Firebase, React and the Open Movie Database API.",
    tech: ["React", "Firebase", "Styled Components"],
    demo: "https://movie-recommendations.netlify.app",
    repo: "https://github.com/a-bishop/movies-to-watch",
  },
  {
    title: "Population Stats",
    description: "A React single-page app for comparing country populations in a bar graph, using D3.",
    tech: ["React", "D3"],
    demo: "/population-stats/",
    repo: "https://github.com/a-bishop/population-stats",
  },
  {
    title: "Outdraw",
    description: "A real-time collaborative drawing app using HTML5 Canvas, Feathers.js, web sockets and neDB.",
    tech: ["Feathers.js", "Node.js", "Canvas", "Web Sockets"],
    repo: "https://github.com/a-bishop/feathers-draw",
  },
  {
    title: "Podblast",
    description: "A simple iOS podcast search and recommendation app.",
    tech: ["Swift", "ListenNotes API"],
    repo: "https://github.com/a-bishop/podblast",
  },
];

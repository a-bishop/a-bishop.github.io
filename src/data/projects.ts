export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo?: string;
}

/** Shown first, as larger cards, with no heading. */
export const topProjects: Project[] = [
  {
    title: "Circle of Fifths",
    description: "A simple, handy tool for learning the circle of fifths.",
    tech: ["Svelte", "CSS custom properties"],
    demo: "/svelte-circle-of-fifths",
    repo: "https://github.com/a-bishop/svelte-circle-of-fifths",
  },
  {
    title: "Drum Machine",
    description:
      "A drum machine and arpeggiator built with Tone.js and lit-element, a base class for creating Web Components.",
    tech: ["Tone.js", "Web Components"],
    demo: "/drum-machine",
    repo: "https://github.com/a-bishop/drum-machine",
  },
];

export const moreProjects: Project[] = [
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
    demo: "/population-stats",
    repo: "https://github.com/a-bishop/population-stats",
  },
];

/** Older work with no live demo. Repo links only. */
export const archivedProjects: Project[] = [
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

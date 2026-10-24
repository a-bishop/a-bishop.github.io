import { getCollection, type CollectionEntry } from "astro:content";
import kebabCase from "lodash.kebabcase";

export type Post = CollectionEntry<"posts">;

/**
 * Posts are served at /<file-name>/, so these names would clash with pages
 * on this site or with the demo sites that share the domain.
 */
const RESERVED_SLUGS = new Set([
  "about",
  "projects",
  "tags",
  "blog",
  "404",
  "rss.xml",
  "sitemap.xml",
  "drum-machine",
  "population-stats",
  "svelte-circle-of-fifths",
]);

/** Posts, newest first. Drafts show in `npm run dev` but are never published. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", ({ data }) => import.meta.env.DEV || !data.draft);
  for (const post of posts) {
    if (RESERVED_SLUGS.has(post.id)) {
      throw new Error(
        `Post "${post.id}.md" would be served at /${post.id}/, which is already taken. Rename the file.`,
      );
    }
  }
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Tag URL slug. Uses lodash's kebabCase to match the old Gatsby site,
 * so "JavaScript" stays /tags/java-script and "D3" stays /tags/d-3.
 */
export const tagSlug = (tag: string) => kebabCase(tag);

/** Every tag with its posts, sorted by name. */
export async function getTags() {
  const posts = await getPosts();
  const tags = new Map<string, { name: string; slug: string; posts: Post[] }>();
  for (const post of posts) {
    for (const name of post.data.tags) {
      const slug = tagSlug(name);
      const entry = tags.get(slug) ?? { name, slug, posts: [] };
      entry.posts.push(post);
      tags.set(slug, entry);
    }
  }
  return [...tags.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

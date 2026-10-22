import { getCollection, type CollectionEntry } from "astro:content";
import kebabCase from "lodash.kebabcase";

export type Post = CollectionEntry<"posts">;

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
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

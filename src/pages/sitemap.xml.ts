import { getPosts, getTags, isoDate } from "../lib/posts";
import { SITE } from "../lib/site";

// Kept at /sitemap.xml, where the old Gatsby site served its sitemap.
export async function GET() {
  const posts = await getPosts();
  const tags = await getTags();

  const urls: { path: string; lastmod?: string }[] = [
    { path: "/" },
    { path: "/projects" },
    { path: "/about" },
    { path: "/tags" },
    ...posts.map((p) => ({ path: `/${p.id}`, lastmod: isoDate(p.data.date) })),
    ...tags.map((t) => ({ path: `/tags/${t.slug}` })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, lastmod }) =>
      `  <url><loc>${new URL(path, SITE.url).href}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}

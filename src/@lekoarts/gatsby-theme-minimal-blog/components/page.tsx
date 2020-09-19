/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";

type PageProps = {
  data: {
    page: {
      title: string;
      slug: string;
      excerpt: string;
      body: string;
    };
  };
  [key: string]: any;
};

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    <SEO title={page.title} description={page.excerpt} />
    <Flex
      sx={{
        alignItems: `center`,
        justifyContent: `space-between`,
        flexFlow: `wrap`,
      }}
    >
      <Heading variant="styles.h3">{page.title}</Heading>
    </Flex>
    <section sx={{ my: 5, variant: `layout.content` }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
);

export default Page;

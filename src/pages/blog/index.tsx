import type { GetStaticProps } from "next";
import type { IPostMeta } from "@/common/types";
import { PostList } from "@/components/blog";
import { Layout } from "@/components/layout";
import { SeoHead } from "@/components/seo/SeoHead";
import { getAllPosts } from "@/lib/posts";

type Props = { posts: IPostMeta[] };

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { posts: getAllPosts() },
});

export default function BlogPage({ posts }: Readonly<Props>) {
  return (
    <>
      <SeoHead
        title="Blog"
        description="Writing by Martin Kozmelj on practical AI engineering and becoming an engineering manager in the AI era, including what didn't work."
        path="/blog"
      />
      <Layout
        hero={{
          title: "Blog",
          note: "including what didn't work",
          lead: "Practical AI engineering, and becoming an engineering manager in the AI era. Honest notes, including what didn't work.",
        }}
      >
        <article className="flex flex-col gap-6">
          <PostList posts={posts} />
        </article>
      </Layout>
    </>
  );
}

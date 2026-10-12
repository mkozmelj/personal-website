import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import type { IPostMeta } from "@/common/types";
import { MDX_COMPONENTS, PostMeta } from "@/components/blog";
import { BackLink } from "@/components/common/links";
import { TagList } from "@/components/common/tag";
import { Layout } from "@/components/layout";
import { SeoHead } from "@/components/seo/SeoHead";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { post: IPostMeta; source: MDXRemoteSerializeResult };
type Params = { slug: string };

export const getStaticPaths: GetStaticPaths<Params> = async () => ({
  paths: getAllPosts().map(({ slug }) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { meta, source } = await getPost(params!.slug);
  return { props: { post: meta, source } };
};

export default function PostPage({ post, source }: Readonly<Props>) {
  return (
    <>
      <SeoHead
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        article={{ publishedTime: post.date, tags: post.tags }}
      />
      <Layout article>
        <article className="flex flex-col gap-6">
          <BackLink href="/blog">Blog</BackLink>
          <header className="flex flex-col gap-3">
            <h1 className="text-h1 text-text">{post.title}</h1>
            <PostMeta post={post} />
          </header>
          <div className="prose">
            <MDXRemote {...source} components={MDX_COMPONENTS} />
          </div>
          {post.tags.length > 0 && <TagList tags={post.tags} />}
        </article>
      </Layout>
    </>
  );
}

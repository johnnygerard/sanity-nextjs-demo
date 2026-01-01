import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { DateDisplay } from "~/components/date-display";
import { client } from "~/sanity/lib/client";

const BLOG_POST_QUERY = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0]{
    ...,
    "featuredImageAsset": featuredImage.asset->,
  }
`);

type Props = {
  params: Promise<{ slug: string }>;
};

const BlogPostPage: FC<Props> = async ({ params }) => {
  const { slug } = await params;

  const post = await client.fetch(
    BLOG_POST_QUERY,
    { slug },
    { next: { revalidate: 30 } },
  );

  if (post == null) {
    console.error(`Blog post not found for slug: ${slug}`);
    return <div>Post not found</div>;
  }

  return (
    <main className="container mx-auto flex min-h-screen max-w-3xl flex-col gap-4 p-8">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {post.featuredImageAsset?.url && (
        <Image
          alt={post.featuredImageAsset.altText ?? "Featured image"}
          blurDataURL={post.featuredImageAsset.metadata?.lqip}
          className="aspect-video w-full rounded-xl object-cover"
          placeholder="blur"
          preload={true}
          sizes="min(100vw, 48rem)"
          src={post.featuredImageAsset.url}
          width={post.featuredImageAsset.metadata?.dimensions?.width}
          height={post.featuredImageAsset.metadata?.dimensions?.height}
        />
      )}
      <hgroup>
        <h1 className="mb-8 text-4xl font-bold">{post.title}</h1>
        {post.subtitle && <h2 className="mb-4 text-2xl">{post.subtitle}</h2>}
      </hgroup>
      <div className="prose">
        <p>
          Published: <DateDisplay isoDate={post.publishedAt} />
        </p>
        <PortableText value={post.content} />
      </div>
    </main>
  );
};

export default BlogPostPage;

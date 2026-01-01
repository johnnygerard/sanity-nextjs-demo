import { defineQuery } from "next-sanity";
import Link from "next/link";
import type { FC } from "react";
import { client } from "~/sanity/lib/client";
import { tw } from "~/utils/tw";

const BLOG_POSTS_QUERY = defineQuery(`*[_type == "blogPost"]`);

const HomePage: FC = async () => {
  const posts = await client.fetch(
    BLOG_POSTS_QUERY,
    {},
    { next: { revalidate: 30 } },
  );

  return (
    <div className="grid min-h-screen place-items-center">
      <div>
        <Link
          href="/studio"
          className={tw([
            "inline-flex items-center justify-center rounded-md",
            "bg-gray-900 px-4 py-2",
            "text-sm font-medium text-gray-50",
            "transition-colors hover:bg-gray-800",
            "outline-offset-2 focus-visible:outline-gray-900/40",
          ])}
        >
          Open Sanity Studio
        </Link>
        <hgroup>
          <h1 className="mt-8 text-4xl font-bold">
            Welcome to the Sanity demo with Next.js!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Below are the blog posts fetched from Sanity CMS:
          </p>
        </hgroup>
        <ul className="mt-8">
          {posts.map((post) => (
            <li key={post._id}>
              <h2>
                <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
              </h2>
              {post.subtitle && <p>{post.subtitle}</p>}
              <p>Published at: {post.publishedAt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

import { defineQuery } from "next-sanity";
import Link from "next/link";
import type { FC } from "react";
import { DateDisplay } from "~/components/date-display";
import { client } from "~/sanity/lib/client";
import { buttonStyles } from "~/styles/components";
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
        <Link href="/studio" className={buttonStyles}>
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
        <ul
          className={tw([
            "mt-8 w-full max-w-xl bg-white",
            "divide-y divide-gray-200",
            "rounded-lg border border-gray-200",
          ])}
        >
          {posts.map((post) => (
            <li key={post._id} className="px-4 py-4 sm:px-6">
              <h2 className="text-lg leading-snug font-semibold">
                <Link
                  className="text-gray-900 underline-offset-4 hover:underline"
                  href={`/blog/${post.slug.current}`}
                >
                  {post.title}
                </Link>
              </h2>
              {post.subtitle && (
                <p className="mt-1 text-sm text-gray-600">{post.subtitle}</p>
              )}
              <p className="mt-2 text-xs text-gray-500">
                Published at: <DateDisplay isoDate={post.publishedAt} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

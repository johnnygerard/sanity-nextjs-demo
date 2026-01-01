import { defineQuery } from "next-sanity";
import Link from "next/link";
import type { FC } from "react";
import { DateDisplay } from "~/components/date-display";
import { client } from "~/sanity/lib/client";
import { buttonStyles } from "~/styles/components";

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
        <ul className="mt-8">
          {posts.map((post) => (
            <li key={post._id}>
              <h2>
                <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
              </h2>
              {post.subtitle && <p>{post.subtitle}</p>}
              <p>
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

import type { Metadata } from "next";
import type { FC } from "react";
import { NotFound } from "~/components/not-found";

export const metadata: Metadata = {
  title: "Post Not Found",
};

const NotFoundPage: FC = () => (
  <NotFound
    title="Post Not Found"
    description="Sorry, we couldn't find the blog post you're looking for."
    link={{ href: "/", text: "Back to posts" }}
  />
);

export default NotFoundPage;

import type { Metadata } from "next";
import type { FC } from "react";
import { NotFound } from "~/components/not-found";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const NotFoundPage: FC = () => (
  <NotFound
    title="Page Not Found"
    description="Sorry, the page you are looking for does not exist."
    link={{ href: "/", text: "Back to Home" }}
  />
);

export default NotFoundPage;

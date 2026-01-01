import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";
import { buttonStyles } from "~/styles/components";
import { tw } from "~/utils/tw";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const NotFound: FC = () => (
  <div className="grid min-h-screen place-items-center px-6">
    <div className="text-center">
      <hgroup>
        <p className="text-sm font-medium text-gray-700">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Page Not Found
        </h1>
      </hgroup>
      <p className="mt-4 text-lg text-gray-700">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link className={tw(buttonStyles, "mt-6")} href="/">
        Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;

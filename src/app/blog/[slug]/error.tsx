"use client";
import Link from "next/link";
import { type FC } from "react";
import { buttonStyles } from "~/styles/components";
import { tw } from "~/utils/tw";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorBoundary: FC<Props> = ({ reset }) => (
  <div className="grid min-h-screen place-items-center px-6">
    <div className="text-center" role="alert" aria-live="polite">
      <hgroup>
        <p className="text-sm font-medium text-gray-700">Error</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Something went wrong
        </h1>
      </hgroup>

      <p className="mt-4 text-lg text-gray-700">
        We couldn&apos;t load this blog post. Please try again.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link className={buttonStyles} href="/">
          Back to posts
        </Link>
        <button
          className={tw(buttonStyles, "bg-gray-700 hover:bg-gray-600")}
          onClick={() => reset()}
          type="button"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
);

export default ErrorBoundary;

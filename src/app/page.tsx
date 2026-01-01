import Link from "next/link";
import type { FC } from "react";
import { tw } from "~/utils/tw";

const HomePage: FC = () => (
  <div className="grid min-h-screen place-items-center">
    <div className="flex flex-col items-center gap-6">
      <h1>Deployment Successful!</h1>
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
    </div>
  </div>
);

export default HomePage;

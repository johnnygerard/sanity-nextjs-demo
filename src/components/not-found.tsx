import Link from "next/link";
import type { FC } from "react";
import { buttonStyles } from "~/styles/components";
import { tw } from "~/utils/tw";

type Props = {
  title: string;
  description: string;
  link: {
    href: string;
    text: string;
  };
};

export const NotFound: FC<Props> = ({ title, description, link }) => (
  <div className="grid min-h-screen place-items-center px-6">
    <div className="text-center">
      <hgroup>
        <p className="text-sm font-medium text-gray-700">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">{title}</h1>
      </hgroup>
      <p className="mt-4 text-lg text-gray-700">{description}</p>
      <Link className={tw(buttonStyles, "mt-6")} href={link.href}>
        {link.text}
      </Link>
    </div>
  </div>
);

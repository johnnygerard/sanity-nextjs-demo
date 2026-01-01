import type { FC } from "react";
import * as z from "zod";

/**
 * ISO date schema (format: YYYY-MM-DD)
 * @see https://zod.dev/api#iso-dates
 */
const isoSchema = z.iso.date();

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

type Props = {
  className?: string;
  isoDate: string;
};

export const DateDisplay: FC<Props> = ({ className, isoDate }) => {
  const parseResult = isoSchema.safeParse(isoDate);

  if (!parseResult.success) {
    console.error(`"${isoDate}" is not a valid ISO date.`, parseResult.error);
    return <span className={className}>Invalid date</span>;
  }

  return (
    <time className={className} dateTime={isoDate}>
      {formatter.format(new Date(isoDate))}
    </time>
  );
};

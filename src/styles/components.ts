import { tw } from "~/utils/tw";

export const buttonStyles = tw([
  "inline-flex items-center justify-center rounded-md",
  "bg-gray-900 px-4 py-2",
  "text-sm font-medium text-gray-50",
  "transition-colors hover:bg-gray-800",
  "outline-offset-2 focus-visible:outline-gray-900/40",
]);

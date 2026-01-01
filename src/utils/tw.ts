import { clsx, type ClassValue } from "clsx";

/**
 * No-op wrapper function around `clsx` enabling:
 * - Tailwind CSS IntelliSense
 * - Prettier plugin for Tailwind CSS
 *
 * Requirements:
 * - VS Code extension: bradlc.vscode-tailwindcss
 * - VS Code setting: "tailwindCSS.classFunctions": ["tw"]
 *
 * @example
 * ```ts
 * const button = tw([
 *   "text-sm text-amber-50 font-semibold",
 *   {
 *     primary: "bg-amber-500 hover:bg-amber-600",
 *     secondary: "bg-amber-100 text-amber-700 hover:bg-amber-200",
 *   },
 * ]);
 * ```
 */
export const tw = (...args: ClassValue[]): string => clsx(...args);

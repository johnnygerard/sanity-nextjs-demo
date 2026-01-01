const assertAndGetVariable = (
  value: string | undefined,
  name: string,
): string => {
  if (value === undefined)
    throw new Error(`The environment variable "${name}" is undefined.`);

  return value;
};

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-12-31";

export const dataset = assertAndGetVariable(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertAndGetVariable(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
);

import { expect, test } from "@playwright/test";

test("homepage has an h1 element", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
});

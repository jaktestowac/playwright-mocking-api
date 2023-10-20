import { expect, test } from "@playwright/test";

test("no response @mock-ex34", async ({ page }) => {
  const expectedContent = "";

  const apiPath = "**/api/articles/1";

  await page.route(apiPath, async (route) => {
    // drop response, simulating service outage
    await route.abort();
  });

  await page.goto("/article.html?id=1");

  // Content container
  const observedContent = page.locator("#container");

  await expect(observedContent).toHaveText(expectedContent);
});

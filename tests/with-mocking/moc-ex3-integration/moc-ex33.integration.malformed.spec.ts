import { expect, test } from "@playwright/test";

test("malformed response @mock-ex34", async ({ page }) => {
  // empty content of article
  const expectedContent = "";

  const apiPath = "**/api/articles/1";

  await page.route(apiPath, async (route) => {
    const response = await route.fetch();
    // simulating response out of the contract
    const json = "";
    await route.fulfill({ response, json });
  });

  await page.goto("/article.html?id=1");

  // content container
  const observedContent = page.locator("#container");

  await expect(observedContent).toHaveText(expectedContent);
});

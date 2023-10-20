import { expect, test } from "@playwright/test";

test("bad response @mock-ex32", async ({ page }) => {
  const expectedHeader = "No data";

  const apiPath = "**/api/articles/1";

  await page.route(apiPath, async (route) => {
    // simulating no article found
    const json = {};
    const status = 404;
    await route.fulfill({ status, json });
  });

  await page.goto("/article.html?id=1");

  // No data header
  const observedTitle = page.getByTestId("no-results");

  await expect(observedTitle).toHaveText(expectedHeader);
});

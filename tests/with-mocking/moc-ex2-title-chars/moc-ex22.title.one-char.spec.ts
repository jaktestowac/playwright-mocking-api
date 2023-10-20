import { expect, test } from "@playwright/test";

test("article one char title @mock-ex22", async ({ page }) => {
  // just modify expected value
  const expectedTitle = "x";

  const apiPath = "**/api/articles/1";

  await page.route(apiPath, async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    json.title = expectedTitle;
    await route.fulfill({ response, json });
  });

  await page.goto("/article.html?id=1");
  const observedTitle = page.getByTestId("article-title");

  await expect(observedTitle).toHaveText(expectedTitle);
});

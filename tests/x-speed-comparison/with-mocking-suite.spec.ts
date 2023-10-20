import { expect, test } from "@playwright/test";
import { TITLES } from "./titles";

for (const title of TITLES) {
  test(`article title: ${title} @perf-mock`, async ({ page }) => {
    const expectedTitle = title;

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
}

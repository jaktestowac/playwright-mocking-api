import { expect, test } from "@playwright/test";

// run this test in debug mode to observe how page route works

test("article expected title @mock-ex21", async ({ page }) => {
  const expectedTitle = "💪 Mocked title value 😎";

  const apiPath = "**/api/articles/1";

  await page.route(apiPath, async (route) => {
    // get whole response
    const response = await route.fetch();

    // get actual response body
    const json = await response.json();

    // modify part of the body
    json.title = expectedTitle;

    // continue request processing
    await route.fulfill({ response, json });
  });

  await page.goto("/article.html?id=1");
  const observedTitle = page.getByTestId("article-title");

  await expect(observedTitle).toHaveText(expectedTitle);
});

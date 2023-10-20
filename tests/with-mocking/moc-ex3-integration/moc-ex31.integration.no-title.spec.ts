import { expect, test } from "@playwright/test";

test("without title @mock-ex31", async ({ page }) => {
  // expected message when title not provided
  const expectedTitle = "[No title]";

  // data to be added as title
  const mockedTitle = "";

  const apiPath = "**/api/articles/1";

  await page.route(apiPath, async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    // passing mocked title
    json.title = mockedTitle;
    await route.fulfill({ response, json });
  });

  await page.goto("/article.html?id=1");
  const observedTitle = page.getByTestId("article-title");

  await expect(observedTitle).toHaveText(expectedTitle);
});

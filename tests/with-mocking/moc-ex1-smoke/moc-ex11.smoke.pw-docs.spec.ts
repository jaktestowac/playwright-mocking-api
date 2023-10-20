import { expect, test } from "@playwright/test";

test("playwright docs example @mock-ex11", async ({ page }) => {
  const expectedTitle = "How to write effective test cases";

  // example form official Playwright docs: https://playwright.dev/docs/mock

  await page.route("*/**/api/v1/fruits", async (route) => {
    const json = [{ name: "Strawberry", id: 21 }];
    await route.fulfill({ json });
  });

  // end of example

  await page.goto("/article.html?id=1");
  const observedTitle = page.getByTestId("article-title");

  await expect(observedTitle).toHaveText(expectedTitle);
});
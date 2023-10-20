import { expect, test } from "@playwright/test";

test("playwright docs example @mock-ex11", async ({ page }) => {
  const expectedTitle = "How to write effective test cases";

  // 1. Example form official Playwright docs: https://playwright.dev/docs/mock
  // 2. API path to const apiPath
  // 3. Full response body object const articleJSON 
  // 4. Changed value of title '💪 Mocked title value 😎'
  // 5. Use expectedTitle as reference

  await page.goto("/article.html?id=1");
  const observedTitle = page.getByTestId("article-title");

  await expect(observedTitle).toHaveText(expectedTitle);
});

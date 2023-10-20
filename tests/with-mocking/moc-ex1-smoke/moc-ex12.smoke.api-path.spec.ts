import { expect, test } from "@playwright/test";

test("api path @mock-ex12 @fail", async ({ page }) => {
  // This test should fail
  // It contains correct API path but incorrect json (left form example)

  const expectedTitle = "How to write effective test cases";

  // correct path to mock API resource
  const apiPath = "**/api/articles/1";

  // using path in mocking function
  await page.route(apiPath, async (route) => {
    const json = [{ name: "Strawberry", id: 21 }];
    await route.fulfill({ json });
  });

  await page.goto("/article.html?id=1");
  const observedTitle = page.getByTestId("article-title");

  await expect(observedTitle).toHaveText(expectedTitle);
});
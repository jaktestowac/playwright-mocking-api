import { expect, test } from "@playwright/test";

test("article contain title", async ({ page }) => {
  // Arrange
  const expectedTitle = "How to write effective test cases";

  // Act
  await page.goto("/article.html?id=1");
  const observedTitle = page.getByTestId("article-title");

  // Assert
  await expect(observedTitle).toHaveText(expectedTitle);
});

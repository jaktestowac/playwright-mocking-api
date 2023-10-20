import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // Go to login
  await page.goto("/login/");

  // Enter user data and hit login button
  await page
    .getByPlaceholder("Enter User Email")
    .fill("Moses.Armstrong@Feest.ca");
  await page.getByPlaceholder("Enter Password").fill("test1");
  await page.getByRole("button", { name: "LogIn" }).click();

  // Open form for adding article
  await page.getByTestId("open-articles").click();
  await page.getByRole("button", { name: "Add Article" }).click();
});

test("article one char title", async ({ page }) => {
  // Arrange
  const expectedTitle = "x";

  // Create article with expected data
  await page.getByTestId("title-input").fill(expectedTitle);
  await page.getByTestId("body-text").fill("sdf");
  await page.getByTestId("save").click();

  // Act
  const observedTitle = page.getByTestId("article-title");

  // Assert
  await expect(observedTitle).toHaveText(expectedTitle);
});

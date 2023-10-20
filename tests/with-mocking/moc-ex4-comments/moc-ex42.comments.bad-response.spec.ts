import { expect, test } from "@playwright/test";

test("bad response @mock-ex42", async ({ page }) => {
  const expectedCommentContainer = "No Comments";

  const apiPath = "**/api/comments?article_id=1";

  await page.route(apiPath, async (route) => {
    // simulating empty comments list with 404 status
    const json = [];
    const status = 404;
    await route.fulfill({ status, json });
  });

  await page.goto("/article.html?id=1");

  // Comments container
  const observedCommentContainer = page.locator(".comment-container");

  await expect(observedCommentContainer).toHaveText(expectedCommentContainer);
});

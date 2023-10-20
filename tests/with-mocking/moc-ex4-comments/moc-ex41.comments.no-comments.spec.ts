import { expect, test } from "@playwright/test";

test("without comments @mock-ex41", async ({ page }) => {
  const expectedCommentContainer = "No Comments";

  const apiPath = "**/api/comments?article_id=1";

  await page.route(apiPath, async (route) => {
    const response = await route.fetch();
    // Comments list
    const json = [];
    await route.fulfill({ response, json });
  });

  await page.goto("/article.html?id=1");

  // Comments container
  const observedCommentContainer = page.locator(".comment-container");

  await expect(observedCommentContainer).toHaveText(expectedCommentContainer);
});

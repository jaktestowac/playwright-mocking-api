import { expect, test } from "@playwright/test";

test("article full json modified title @mock-ex14 @fail", async ({ page }) => {
  // This test should fail due to changes in replaced title

  const expectedTitle = "How to write effective test cases";

  const apiPath = "**/api/articles/1";

  // Changed value of title
  const articleJSON = {
    id: 1,
    title: "💪 Mocked title value 😎",
    body: "Test cases are the backbone of any testing process. They define what to test, how to test, and what to expect. Writing effective test cases can save time, effort, and resources. Here are some tips for writing effective test cases:\n- Use clear and concise language\n- Follow a consistent format and structure\n- Include preconditions, steps, expected results, and postconditions\n- Cover positive, negative, and boundary scenarios\n- Prioritize test cases based on risk and importance\n- Review and update test cases regularly",
    user_id: 1,
    date: "2021-07-13T16:35:00Z",
    image: ".\\data\\images\\256\\chuttersnap-9cCeS9Sg6nU-unsplash.jpg",
  };

  await page.route(apiPath, async (route) => {
    const json = articleJSON;
    await route.fulfill({ json });
  });

  await page.goto("/article.html?id=1");
  const observedTitle = page.getByTestId("article-title");

  await expect(observedTitle).toHaveText(expectedTitle);
});

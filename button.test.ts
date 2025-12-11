import { expect, test } from "vitest";
import { page } from "vitest/browser";

const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    .button {
      padding: 12px 24px;
      background-color: #3b82f6;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .button:hover {
      background-color: #2563eb;
    }
  </style>
</head>
<body>
  <button class="button">Click Me</button>
</body>
</html>
`;

test("button visual regression", async () => {
  document.body.innerHTML = html;
  await expect(document.body).toMatchScreenshot();
});

/**
 * Re-capture portfolio project screenshots. Headless Chromium defaults to
 * light color scheme; these sites expect dark mode for correct contrast.
 *
 *   npm run capture-screenshots
 */
import { chromium } from "playwright";

const targets = [
  ["https://dyb.apbaseball.com", "public/projects/gonzales-dyb.png"],
  ["https://llb.apbaseball.com", "public/projects/ascension-llb.png"],
];

const browser = await chromium.launch({
  args: ["--force-color-profile=srgb"],
});

for (const [url, out] of targets) {
  const context = await browser.newContext({
    colorScheme: "dark",
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "load", timeout: 90_000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({ path: out, type: "png" });
  await context.close();
}

await browser.close();

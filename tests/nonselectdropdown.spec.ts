import { Browser, BrowserContext, Locator, Page, chromium, expect, firefox, selectors, test, webkit } from '@playwright/test';


test('Non Select based dropdown test', async ({ page }) => {
await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
await page.locator('#justAnInputBox').click();
await page.waitForTimeout(2000);

// await page.locator('span.comboTreeItemTitle').
// filter({hasText:'choice 6 2 3'}).first().click();

await selectChoice(page, ['choice 5','choice 4','choice 6 2 2','choice 7']);

await page.pause();
});

async function selectChoice(page:Page,choices:string[]):Promise<void>
{
for(let ch of choices)
{
await page.locator('span.comboTreeItemTitle').filter({hasText: `${ch}`}).first().click();
}
}
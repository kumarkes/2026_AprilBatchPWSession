

import { Browser, BrowserContext, Page, chromium, expect, firefox, test, webkit } from '@playwright/test';

test.use({ storageState: './opensaucedemo.json' });

test('launch swag labs test without login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.goto('https://www.saucedemo.com/cart.html');
    await page.pause();
});



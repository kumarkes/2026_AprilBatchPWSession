import { Browser, BrowserContext, Page, chromium, firefox, test, webkit } from '@playwright/test';

test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByRole('heading', {name:'Returning Customer', exact:true}).highlight();
    await page.getByRole('heading', {name:'New Customer', exact:true}).highlight();
    await page.getByRole('textbox', {name:'Search'}).highlight();
    await page.waitForTimeout(5000);
//https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-28
});

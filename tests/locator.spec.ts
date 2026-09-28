import { Browser, BrowserContext, Page, chromium, firefox, test, webkit } from '@playwright/test';

test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let emailId = page.getByRole('textbox', {name:'E-Mail Address'});
await emailId.fill('naveen@pw.com')
await page.getByRole('textbox', {name:'Password'}).fill('test@123');
await page.getByRole('button', {name:'Login'}).click();
await page.waitForTimeout(5000);
await page.pause();

});

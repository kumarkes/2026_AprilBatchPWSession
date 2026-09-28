import { Browser, BrowserContext, Page, chromium, firefox, test, webkit } from '@playwright/test';

test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', {name:'* Password',exact:true}).fill('pw123');
    await page.getByRole('link',{name:'Forgotten Password'}).last().click();
    await page.getByRole('checkbox',{name:'I agree to the Terms & Conditions', exact:true}).click();
    await page.waitForTimeout(5000);

});

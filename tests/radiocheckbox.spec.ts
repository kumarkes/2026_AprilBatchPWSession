

import { test, expect, Locator } from '@playwright/test';

test('radio and checkbox test', async ({ page }) => {
    await page.goto('https://www.shapemyinterview.com/study/playwright-locator-playground.html?');


    //radio:
    await page.getByRole('radio', { name: 'Ruby' }).click();

    //checkbox:
    await page.getByRole('checkbox', { name: 'Cypress' }).click();
    await page.getByRole('checkbox', { name: 'I agree to the Terms & Conditions', exact: true }).click();


    // await page.waitForTimeout(5000);
});



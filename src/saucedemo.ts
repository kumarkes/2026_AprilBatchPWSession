//IIFE:

import { chromium, expect } from "playwright/test"

(async () => {
    let browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator("//input[@value='Login']").click();
    let title = await page.title();
    console.log('Page Title is ' + title);
    expect(await page.title()).toBe('Swag Labs'); //assertion
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await page.locator("//a[@class='shopping_cart_link']").click();
    page.context().storageState({ path : 'opensaucedemo.json'});

    //await page.context().storageState({ path: 'opencartstate.json' });

})();

//tsc ---> authstate.js
//node authstate.js
    
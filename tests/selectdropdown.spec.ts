import { Browser, BrowserContext, Locator, Page, chromium, expect, firefox, selectors, test, webkit } from '@playwright/test';


test('Single Selection select drop down list', async ({ page }) => {
await page.goto('https://orangehrm.com/contact-sales');
let selectVal: string[] = await page.getByRole('combobox', {name:'Country'}).selectOption('India'); // Direct drop down value
console.log(selectVal);
await page.waitForTimeout(2000);

selectVal = await page.getByRole('combobox', {name:'Country'}).selectOption({label:'Angola'}); // Visible Text
console.log(selectVal);
await page.waitForTimeout(2000);

selectVal = await page.getByRole('combobox', {name:'Country'}).selectOption({value:'Belgium'}); // Value Attribute
console.log(selectVal);
await page.waitForTimeout(2000);

selectVal = await page.getByRole('combobox', {name:'Country'}).selectOption({ index: 15 }); // Using Index Based
console.log(selectVal);
await page.waitForTimeout(2000);

let selectVal1 = await page.getByRole('combobox', {name:'Country'}).inputValue();
console.log(selectVal1);

await page.pause();
});

test('Multi Selection select drop down list', async ({ page }) => {
await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');
let selectval = await page.locator('[name="Month"]').selectOption(["January","February","May","November"])
console.log(selectval);
await page.pause();
});
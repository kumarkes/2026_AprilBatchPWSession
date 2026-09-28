import { Browser, BrowserContext, Locator, Page, chromium, expect, firefox, selectors, test, webkit } from '@playwright/test';
import { clear } from 'node:console';


test('Chain Locator Test', async ({ page }) => {
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
/*locator('form').getByRole('textbox',{name:'First Name'})
locator('#column-right').getByRole('link',{name: 'Forgotten Password'});
locator('link').getByRole('link',{name: 'Forgotten Password'});*/

await page.locator('form').getByRole('textbox', { name: 'First Name'}).fill('Naveen Automation Labs');
await page.waitForTimeout(2000);
await page.locator('#column-right').getByRole('link', { name: 'Forgotten Password'}).click();
await page.waitForTimeout(2000);
await page.locator('link').getByRole('link', { name: 'Forgotten Password'});

await page.pause();
});

test('webtable handling test', async ({ page }) => {
await page.goto('https://qavbox.github.io/demo/webtable/');
await page.locator('#table01')
                  .locator('tr')
                          .filter({hasText:'GUI'})
                                 .getByRole('checkbox').click();
await page.locator('#table01')
                  .locator('tr')
                          .filter({hasText:'GUI'})
                                 .getByRole('button',{name:'Delete'}).click();

let OfficeName: string = await page.locator('#table02')
                                .locator('tr')
                                        .filter({hasText:'Ashton Cox'})
                                               .locator('td')
                                                        .nth(2).innerText();
console.log(OfficeName);

let columnCount = await page.locator('#table02 tr th').count();
console.log(columnCount);

let rowCount = await page.locator('#table02 tr').count()-1;
console.log(rowCount);

});


test('Cricinfo scorecard handling test', async ({ page }) => {
await page.goto('https://www.cricinfo.com/series/pakistan-in-west-indies-2026-1538621/west-indies-vs-pakistan-2nd-test-1538631/full-scorecard');
let BrandonWT: string= await page.locator('table.ci-scorecard-table')
            .locator('tr')
                    .filter({hasText:'Brandon King'})
                           .first()
                                  .locator('td')
                                          .nth(1)
                                              .locator('span')
                                                      .last().innerText();
console.log(BrandonWT);

let KavemWT: string= await page.locator('table.ci-scorecard-table')
            .locator('tr')
                    .filter({hasText:'Kavem Hodge21'})
                           .first()
                                  .locator('td')
                                          .nth(1)
                                              .locator('span')
                                                      .last().innerText();
console.log(KavemWT);


await page.pause();
});


test('fetch data from webtable test', async ({ page }) => {
await page.goto('https://www.w3schools.com/html/html_tables.asp');
let fulldata = await page.locator('table').first().locator('tr').allInnerTexts();
for(let e of fulldata)
{
        console.log(e);
        console.log("=============================");
}
await page.pause();



});

test('Select all checkboxes in webtable test', async ({ page }) => {
await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
let checkBox = await page.locator('table#resultTable tr td ').getByRole('checkbox').all();
// for(let ele of checkBox)
// {
//         await ele.click();
//         await page.waitForTimeout(2000);
// }

for (let i = 1; i < checkBox.length; i++) {
        await checkBox[i].click();
        await page.waitForTimeout(1000);
        
}
await page.pause();
});



test('get tables data from cricinfo webtable test', async ({ page }) => {
await page.goto('https://www.cricinfo.com/series/afghanistan-in-ireland-2026-1528534/ireland-vs-afghanistan-3rd-odi-1528552/full-scorecard');
let playerName = 'Jai Moondra';
let wicketTakerName = await page.locator('table.ci-scorecard-table').first()
                  .locator('tr').filter({hasText:`${playerName}`})
                          .first().locator('td').nth(1).locator('span span').innerText();
console.log(wicketTakerName);

// Fetching comlete scorecard for the player
let scorecard = await page.locator('table.ci-scorecard-table').first()
                  .locator('tr').filter({hasText:`${playerName}`})
                          .first().locator('td').all();
for(let ele of scorecard)
{
 let info = await ele.textContent();
 console.log(info);
}



await page.pause();
});
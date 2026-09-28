import { test, expect, Locator, webkit } from '@playwright/test';


test('Right Click test', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    //right click or content click on context menu:

    await page.getByText('right click me', { exact: true }).click({ button: 'right' });

    await page.waitForTimeout(3000);

    await page.getByText('Copy', { exact: true }).click();

    await page.pause();


});


test('Drag and Drop test', async ({ page }) => {

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    let source = page.locator('#draggable');
    let target = page.locator('#droppable');

    await source.dragTo(target);

    await page.pause();

});


test('level 2 menu & sub mneu handling test', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');

    await page.getByText('Travel Policies', { exact: true }).hover();//L1

    //wait for the sub menu element:
    await page.getByText('Passenger Rights', { exact: true }).waitFor({ state: 'visible' });

    await page.getByText('Passenger Rights', { exact: true }).click();//L2

    await page.pause();

});



test('level 4 menu & sub menu handling test', async ({ page }) => {

    await page.goto('https://www.bigbasket.com/');

    await page.getByText('Shop by', { exact: true }).last().click(); //L1

    await page.locator('[id*="headlessui-menu-items"]').getByRole('link', { name: 'Beverages' }).last().hover(); //L2

    await page.getByRole('link', { name: 'Tea', exact: true }).hover(); //L3

    await page.getByRole('link', { name: 'Green Tea' }).click(); //L4

    await page.pause();

});



test('Best Buy level 4 menu & sub menu handling test', async ({ page }) => {
    await page.goto('https://www.bestbuy.com/?intl=nosplash');

    await page.getByText('Shop', { exact: true }).nth(0).click(); //L1
    await page.locator('[data-testid="menu-level1-container"]').getByRole('button', { name: 'Video Games' }).click();
    await page.locator('[data-testid="menu-level2-container"]').getByRole('button', { name: 'XBOX' }).click();
    await page.getByRole('link', { name: 'Explore XBOX' }).click();

    await page.pause();

});


//https://www.bestbuy.com/?intl=nosplash


test('sample test', async ({ page }) => {

    await page.goto('https://www.sreenidhirajakrishnan.com');
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Interview Prep' }).hover();
    await page.waitForTimeout(2000);

    let allLinks: Locator[] = await page.locator('div.absolute a').all();

    console.log(allLinks.length);


    for (let ele of allLinks) {
        await ele.click();
        console.log(await page.title());
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'Interview Prep' }).hover();
        allLinks = await page.locator('div.absolute a').all();
    }


});



test('FlpKart Search SVG testing', async ({ page }) => {


    await page.goto("https://www.flipkart.com/")
    await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).first().fill('macbook air m5')


    await page.getByRole('button', { name: 'Search for Products, Brands and More' }).first().locator('//*[local-name()="svg"]')
        .click()

    await page.pause();
});
import { test, expect, BrowserContext, Page } from '@playwright/test';

test('chat window users test', async ({ browser }) => {
  let ctx1: BrowserContext = await browser.newContext();
  let ctx2: BrowserContext = await browser.newContext();
  let ctx3: BrowserContext = await browser.newContext();
  let ctx4: BrowserContext = await browser.newContext();

  let page1: Page = await ctx1.newPage();
  let page2: Page = await ctx2.newPage();
  let page3: Page = await ctx3.newPage();
  let page4: Page = await ctx4.newPage();


  await page1.goto('http://localhost:3000/');
  await page2.goto('http://localhost:3000/');
  await page3.goto('http://localhost:3000/');
  await page4.goto('http://localhost:3000/');

  await page1.locator('#usernameInput').fill('Keshav');
  await page1.locator('#joinBtn').click();
  await page1.locator('#messageInput').fill('Hi Ramesh ..How are You')
  await page1.locator('#sendBtn').click();
  

  
  await page2.locator('#usernameInput').fill('Ramesh');
  await page2.locator('#joinBtn').click();
  await page2.locator('#messageInput').fill('Hi Keshav ..I am Good');
  await page2.locator('#sendBtn').click();

  await page3.locator('#usernameInput').fill('Deepti');
  await page3.locator('#joinBtn').click();
  await page3.locator('#messageInput').fill('Hi Keshav ..do we have session today')
  await page3.locator('#sendBtn').click();

  await page4.locator('#usernameInput').fill('Neha');
  await page4.locator('#joinBtn').click();
  await page4.locator('#messageInput').fill('Hi Deepti ..I just got a message, we dont have session today')
  await page4.locator('#sendBtn').click();
  
  await page1.pause();
  await page2.pause();  
  await page3.pause();
  await page4.pause();  
 // await page1.close();    
 // await page2.close();         
 //await browser.close();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
});
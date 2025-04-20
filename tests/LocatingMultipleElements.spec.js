import {test, expect} from '@playwright/test';

test('Locate Multiple Elements', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    //Wait for all the links to be loaded
    await page.waitForSelector("//h4[@class='card-title']/a")

    const links = await page.$$("//h4[@class='card-title']/a");

    for(const link of links)
    {
       const linkText = await link.textContent();
       console.log(linkText);
    }

})
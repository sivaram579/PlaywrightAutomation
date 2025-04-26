//const {test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test';

test('Locators', async({page})=> {

    await page.goto("https://demoblaze.com/");

    //Click on Login button
    //await page.locator('id=login2').click()
    await page.click('id=login2')

    //enter username
    await page.locator('#loginusername').fill('pavanol')
    //await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername','pavanol')

    //enter password
    await page.fill('#loginpassword','test@123')

    //Click on login button
    await page.click("//button[contains(text(),'Log in')]")

    //Verify logout link
    var logoutLink = await page.locator('#logout2');
    await expect(logoutLink).toBeVisible();

    //close the browser
    await page.close();

})
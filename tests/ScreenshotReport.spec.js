import { test, expect } from '@playwright/test';

test('Report with screenshot', async ({ page })=> {
    await page.goto("https://demoblaze.com/")

    await page.click('id=login2')

    //Login
    await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginpassword','test@123')
    await page.click("//button[contains(text(),'Log in')]") 

})
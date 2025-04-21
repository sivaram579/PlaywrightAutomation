import {test, expect} from '@playwright/test';

test('Home Page Test', async ({page})=> {
    await page.goto("https://demoblaze.com/");
    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[contains(text(),'Log in')]").click();
    //Test Home Page
    await expect(page.locator('#nameofuser')).toHaveText('Welcome pavanol');
    //Logout    
    await page.locator('#logout2').click();
})

test('Add Product to Kart Test', async ({page})=> {
    await page.goto("https://demoblaze.com/");
    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[contains(text(),'Log in')]").click();

    //Add product to cart
    await page.locator("//a[contains(text(),'Samsung galaxy s6')]").click();
    await page.locator("//a[contains(text(),'Add to cart')]").click();

    page.on('dialog', async dialog => {
        await expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    })

    //Logout 
    await page.locator('#logout2').click();
})
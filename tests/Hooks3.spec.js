import {test, expect} from '@playwright/test';

let page;

//Need to create only one browser and one page instance
test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    await page.goto("https://demoblaze.com/");
    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[contains(text(),'Log in')]").click();
});

//Should not pass page instance here
test.afterAll(async() => {
    //Logout    
    await page.locator('#logout2').click();
})

//Should not pass page instance here
test('Home Page Test', async ()=> {    
    //Test Home Page
    await expect(page.locator('#nameofuser')).toHaveText('Welcome pavanol');    
});

//Should not pass page instance here
test('Add Product to Kart Test', async ()=> {
    //Add product to cart
    await page.locator("//a[contains(text(),'Samsung galaxy s6')]").click();
    await page.locator("//a[contains(text(),'Add to cart')]").click();

    page.on('dialog', async dialog => {
        await expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    })
});
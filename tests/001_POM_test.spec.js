import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Page Object Model Test', async({ page }) =>  {
    
    //Login page
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('pavanol','test@123');
    await page.waitForTimeout(3000);    

    //Home Page
    const homePage = new HomePage(page);
    await homePage.addProductToCart('Nexus 6');
    await page.waitForTimeout(3000); 
    await homePage.gotoCart();

    //Cart page
    const cartPage = new CartPage(page);
    await page.waitForTimeout(3000); 
    const status = await cartPage.checkProductInCart('Nexus 6');
    expect(await status).toBe(true);

})
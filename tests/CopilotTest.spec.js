const { test, expect } = require('@playwright/test');

test('Login test for SauceDemo', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.fill('#user-name', 'standard_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click the login button
    await page.click('#login-button');

    // Assert that the home page is displayed after login
    await expect(page.locator('.title')).toHaveText('Products');
});
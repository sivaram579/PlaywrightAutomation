const { test, expect } = require('@playwright/test');

test('Login and verify home page on SauceDemo', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.fill('#user-name', 'standard_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click the login button
    await page.click('#login-button');

    // Verify that the home page is displayed by checking the presence of a specific element
    await expect(page.locator('.title')).toHaveText('Products');
});
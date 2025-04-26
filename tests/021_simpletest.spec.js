const { test, expect } = require('@playwright/test');

test('Login to www.saucedemo.com and validate home page', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.fill('#user-name', 'standard_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click the login button
    await page.click('#login-button');

    // Validate that the home page is displayed by checking for a specific element
    await expect(page.locator('.inventory_list')).toBeVisible();

    // Optionally, validate the URL
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
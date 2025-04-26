const { test, expect } = require('@playwright/test');

test.use({ storageState: 'auth.json' });

test.skip('GlobalSetup_TearDown', async ({ page }) => {
// Global Setup
await page.goto('/index.html');
console.log('Global setup completed.');

// Perform any necessary actions for setup
// Example: Login or initialize state

// Global Teardown
page.on('close', () => {
    console.log('Global teardown executed.');
    // Perform any necessary cleanup actions
});
  await expect(page).toHaveTitle('STORE');
});
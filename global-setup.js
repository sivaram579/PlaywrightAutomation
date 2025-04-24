const { chromium } = require('@playwright/test');
const fs = require('fs');

module.exports = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://demoblaze.com');

  // Save authentication state to file
  await page.context().storageState({ path: 'auth.json' });

  await browser.close();
};
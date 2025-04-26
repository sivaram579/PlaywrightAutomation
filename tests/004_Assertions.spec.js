import { test, expect } from '@playwright/test';

test('Hard and soft assertions', async ({page}) => {

    await page.goto("https://demoblaze.com/")

    //Hard Assertions - Execution stops at the failed assertion
   /* await expect(page).toHaveTitle("STORE123");
    await expect(page).toHaveURL("https://demoblaze.com/");
    await expect(page.locator('#nava')).toBeVisible();
    */
    //Soft Assertions - Execution will continue even after failed assertion
    await expect.soft(page).toHaveTitle("STORE");
    await expect.soft(page).toHaveURL("https://demoblaze.com/");
    await expect.soft(page.locator('#nava')).toBeVisible();

})
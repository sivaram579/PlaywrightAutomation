import { test, expect} from '@playwright/test';

test('Dropdown handling', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    //Select Dropdown value by label
    //await page.locator("#country").selectOption({label: 'India'});

    //Select Dropdown element by visible text
    //await page.locator("#country").selectOption('India');

    //Select dropdown element by using value attribute
    //await page.locator("#country").selectOption({value: 'uk'});

    //Select dropdown element by using index
    //await page.locator("#country").selectOption({index: 1});

    await page.selectOption("#country", 'India');

    await page.waitForTimeout(5000);

})
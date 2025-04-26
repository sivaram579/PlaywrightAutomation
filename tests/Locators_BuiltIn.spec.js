/*
page.getByRole() to locate by attributes
page.getByText() to locate by text content
page.getByLabel() to locate a form control by associated label text
page.getByPlaceHolder() to locate an input by placeholder
page.getByAltText() to locate an element, usually an image by it text alternative
page.getByTitle() to locate an element by its text attributes
page.getByTestId() to locate an element by its data-testid attribute
*/
import {test, expect} from '@playwright/test';

test.skip('Builtin Locators', async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //page.getByAltText()
    await expect(page.getByAltText('company-branding')).toBeVisible();
    //page.getByPlaceHolder()
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    //page.getByRole()
    await page.getByRole('button', {type:'submit'}).click();

    //page.getByText()
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(page.getByText(name)).toBeVisible();

    await page.close();
})
import { test, expect} from '@playwright/test';

test('Alerts with OK', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable alert window handler //Dialog window handler
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.locator('#alertBtn').click();
})

test('Confirmation Dialog - Alerts with OK and Cancel', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable alert window handler //Dialog window handler
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); //close by using OK button
        //await dialog.dismiss(); // close by using Cancel button
    })

    await page.locator('#confirmBtn').click();
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');
})

test('Prompt Dialog', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable alert window handler //Dialog window handler
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Ram'); //Close by providing value
    })

    await page.locator('#promptBtn').click();
    await expect(page.locator('#demo')).toHaveText('Hello Ram! How are you today?');
})
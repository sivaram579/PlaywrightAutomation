import { test, expect} from '@playwright/test';

test('Page Screenshot', async({page}) => {
    await page.goto("https://demoblaze.com/");

    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Page.png'})
})

test('Full Page Screenshot', async({page}) => {
    await page.goto("https://demoblaze.com/");

    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'FullPage.png', fullPage:true})
})

test('Element Screenshot', async({page}) => {
    await page.goto("https://demoblaze.com/");

    await page.locator("//*[@id='tbodyid']/div[1]/div").screenshot({path:'tests/Screenshots/'+Date.now()+'Element.png'})
})
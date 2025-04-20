Playwright execution commands
-----------------------------
Run all tests --- **npx playwright test**

Run Specfific Test --- **npx playwright test myspec.sepc.js**

Run Specific test in specific browser --- **npx playwright test myspec.pec.js --project=chromium**

Run Specific test in specific browser in headed mode --- **npx playwright test HomePageTest.spec.js --project=chromium --headed**

Run Specific test in specific browser in headed mode in Debug mode --- **npx playwright test HomePageTest.spec.js --project=chromium --headed --debug
**
Playwright locating elements
---------------------------------
Single Elements - Property, CSS, Xpath

link/button
-------------
await page.locator('locator').click()
await page.click('locator')

input box
--------------
await page.locator('locator').fill()
await page.fill('locator','inputValue')

Locate multiple web elements
-----------------------------
const elements = await page.$$('locator')

Wait for locator
------------------
await page.waitForSelector("Locator")

Built-in Locators in Playwright
----------------------------------
***page.getByRole()*** to locate by attributes

***page.getByText()*** to locate by text content

***page.getByLabel()*** to locate a form control by associated label text

***page.getByPlaceHolder()*** to locate an input by placeholder

***page.getByAltText()* **to locate an element, usually an image by its text alternative

***page.getByTitle()*** to locate an element by its text attributes

***page.getByTestId()*** to locate an element by its data-testid attribute

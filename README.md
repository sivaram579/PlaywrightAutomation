Playwright execution commands
-----------------------------
## Run all tests
npx playwright test

## Run Specfific Test
npx playwright test myspec.sepc.js

## Run Specific test in specific browser
npx playwright test myspec.pec.js --project=chromium

## Run Specific test in specific browser in headed mode
npx playwright test HomePageTest.spec.js --project=chromium --headed

## Run Specific test in specific browser in headed mode in Debug mode
npx playwright test HomePageTest.spec.js --project=chromium --headed --debug

# Playwright Automation Project

This project contains automated tests using Playwright for web application testing.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Visual Studio Code (recommended)
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PlaywrightAutomation
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 🧪 Project Structure

```
PlaywrightAutomation/
├── tests/               # Test files
├── pages/              # Page object models
├── playwright.config.js # Playwright configuration
├── global-setup.js     # Global setup script
├── global-teardown.js  # Global teardown script
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## ⚙️ Configuration

The project uses `playwright.config.js` for configuration. Key features include:
- Parallel test execution
- HTML reporter
- Screenshot and video capture on test failure
- Trace collection on first retry
- Chrome browser configuration

## 🏃‍♂️ Running Tests

### Basic Commands

- Run all tests:
```bash
npx playwright test
```

- Run specific test file:
```bash
npx playwright test tests/HomePageTest.spec.js
```

- Run tests in headed mode:
```bash
npx playwright test --headed
```

- Run tests in debug mode:
```bash
npx playwright test --debug
```

### Browser-Specific Commands

- Run tests in Chrome:
```bash
npx playwright test --project=chromium
```

- Run tests in Firefox:
```bash
npx playwright test --project=firefox
```

- Run tests in Safari:
```bash
npx playwright test --project=webkit
```

### Test Filtering

- Run tests with specific tags:
```bash
npx playwright test --grep @tag1
```

- Exclude tests with specific tags:
```bash
npx playwright test --grep-invert @tag1
```

## 📝 Test Writing Guidelines

### Locators

Playwright provides multiple ways to locate elements:

```javascript
// By role
await page.getByRole('button', { name: 'Submit' }).click();

// By text
await page.getByText('Welcome').click();

// By label
await page.getByLabel('Username').fill('user');

// By placeholder
await page.getByPlaceholder('Enter email').fill('test@example.com');

// By test id
await page.getByTestId('submit-button').click();
```

### Test Hooks

```javascript
test.beforeEach(async ({ page }) => {
  // Runs before each test
});

test.afterEach(async ({ page }) => {
  // Runs after each test
});

test.beforeAll(async () => {
  // Runs once before all tests
});

test.afterAll(async () => {
  // Runs once after all tests
});
```

### Test Groups

```javascript
test.describe('Login Tests', () => {
  test('should login successfully', async ({ page }) => {
    // Test implementation
  });
});
```

## 📊 Test Reports

After test execution, HTML reports are generated in the `playwright-report` directory. To view the report:

```bash
npx playwright show-report
```

## 🔄 Retry Mechanism

Tests can be configured to retry on failure:
- Configure in `playwright.config.js`: `retries: 1`
- Run with specific retry count: `npx playwright test --retries=2`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📧 Contact

For any queries or support, please contact the project maintainers.

# Playwright Test Automation Framework

A TypeScript-based Playwright framework for automated web application testing.

## Overview

This project illustrates a simple, yet scalable Page Object Model (POM) test automation framework using Playwright and TypeScript for reliable web automation testing.

The application under test is https://practicesoftwaretesting.com/ (Toolshop), a demo e-commerce site with a REST API.

## Current Status

**Active Development** - Base, Home and Registration pages with HomePage and RegistrationPage validation tests.

## Features

- Playwright-based test infrastructure
- TypeScript programming language
- Page Object Model (POM) design pattern
- Environment variable configuration via dotenv
- Test tagging strategy (`@smoke`, `@regression`)
- HTML test reporting

## Project Structure
```
playwright-test-automation/
├── pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   └── RegistrationPage.ts
├── tests/
│   └── UI/
│       ├── HomePage.spec.ts
│       └── RegistrationPage.spec.ts
├── utils/
│   └── GenerateRandomData.ts
├── .env                        # Not committed — see Environment Variables
├── playwright.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Setup

**Prerequisites:**
- Node.js v24+
- npm v11+

**Installation:**
```bash
# Clone the repository
git clone https://github.com/donswebster-self/playwright-test-automation.git
cd playwright-test-automation

# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install
```

**Environment Configuration:**

Create a `.env` file in the project root:
```
APP_URL=<your target app URL>
```

## Running Tests
```bash
# Run all tests
npx playwright test

# Run UI tests only
npx playwright test tests/UI

# Run by tag
npx playwright test --grep "@smoke"

# View with HTML report
npx playwright show-report
```

## Test Coverage

**HomePage Tests (7 tests)** - `tests/UI/HomePage.spec.ts`
1. Validate home page title
2. Validate home page loads successfully
3. Validate home page sign-in link attributes
4. Validate home page language button attributes
5. Validate home page contact link attributes
6. Validate home page link attributes
7. Validate home page banner image attributes

**RegistrationPage Tests (7 tests)** - `tests/UI/RegistrationPage.spec.ts`
1. Validate registration page title
2. Validate registration page loads successfully
3. Validate registration page personal details attributes
4. Validate registration page address attributes
5. Validate registration page contact details attributes
6. Validate registration page register button attributes
7. Validate new customer registration with dynamic Faker data

## Roadmap

- ✅ BasePage
- ✅ HomePage (POM)
- ✅ HomePage tests (smoke/regression)
- ✅ Registration Page (POM)
- ✅ Registration tests (smoke/regression)
- ✅ New customer registration test with Faker-generated dynamic data (smoke/regression)
- ⬜ Login Page (POM)
- ⬜ Login tests
- ⬜ Refactor test data - static JSON fixture for stable fields, Faker only where uniqueness matters (email), for reproducible failures
- ⬜ CI/CD pipeline with GitHub Actions
- ⬜ REST API tests

## Technology Stack

- **Playwright** - Test framework
- **TypeScript** - Core language
- **Page Object Model (POM)** - Design pattern
- **dotenv** - Environment configuration
- **Faker** - Realistic dynamic test data generation
- **Luxon** - Date/time formatting for test data

## Testing Methodology

Tests are organized by layer (UI, with API planned) and tagged for selective execution (`@smoke`, `@regression`). The Page Object Model pattern separates locator definitions and interaction logic from test assertions, keeping tests readable and maintainable as the suite grows.

## About

This framework was designed and built from scratch, drawing on 14 years of professional software quality engineering experience.

## Author

**Don Webster**

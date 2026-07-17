/**
 * Test Case: LoginPage Tests
 * 
 * Steps:
 * 1) Navigate to the Login page
 * 2) Validate page title
 * 3) Validate page loads successfully
 * 4) Validate login page Sign in with Google attributes
 * 5) Validate login page email address input field attributes
 * 6) Validate login page password input field attributes
 * 7) Validate login page register account link attributes
 * 8) Validate login page forgot password link attributes
 * 9) Validate user with correct credentials logs in successfully (Prerequsite: Create new user account for each login test execution)
 * 
 */

import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { GenerateRandomData } from '../../utils/GenerateRandomData';

test.describe('Login page tests', () => {
    let loginPage: LoginPage;
    let firstName: string;
    let lastName: string;
    let dob: string;
    let country: string;
    let postalCode: string;
    let houseNumber: string;
    let street: string;
    let city: string;
    let state: string;
    let phone: string;
    let email: string;
    let password: string;

    // Creating new registration test data for reliable login test execution
    test.beforeAll(async ({ browser }) => {
        firstName = GenerateRandomData.getFirstName();
        lastName = GenerateRandomData.getLastName();
        dob = GenerateRandomData.getDateOfBirth();
        country = GenerateRandomData.getCountry();
        postalCode = GenerateRandomData.getPostalCode();
        houseNumber = GenerateRandomData.getHouseNumber();
        street = GenerateRandomData.getStreet();
        city = GenerateRandomData.getCity();
        state = GenerateRandomData.getState();
        phone = GenerateRandomData.getPhone();
        email = GenerateRandomData.getEmailAddress();
        password = GenerateRandomData.getPassword();

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("/auth/register");
        const registrationPage = new RegistrationPage(page);
        await registrationPage.registerCustomer(firstName, lastName, dob, country, postalCode, houseNumber, street, city, state, phone, email, password);
        await page.waitForURL(/auth\/login/);
        await page.close();
        await context.close();
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("/auth/login");
        loginPage = new LoginPage(page);
    });

    test('Validate user login page title @smoke @regression', async () => {
        await loginPage.expectTitle(/Login - Practice Software Testing - Toolshop/);
    });

    test('Validate login page load successfully @smoke @regression', async () => {
        await loginPage.expectPageLoaded();
    });

    test('Validate login page Sign in with Google attributes @regression', async () => {
        await loginPage.expectSignInGoogleButtonAttributes();
    });

    test('Validate login page email address input field attributes @regression', async () => {
        await loginPage.expectEmailAddressInputAttributes();
    });

    test('Validate login page password input field attributes @regression', async () => {
        await loginPage.expectPasswordInputAttributes();
    });

    test('Validate login page register account link attributes @regression', async () => {
        await loginPage.expectRegisterAccountLinkAttributes();
    });

    test('Validate login page forgot password link attributes @regression', async () => {
        await loginPage.expectForgotPasswordLinkAttributes();
    });

    test('Validate user with correct credentials logs in successfully @smoke @regression', async ({ page }) => {
        await loginPage.login(email, password);
        await page.waitForURL(/account/);
    });

});

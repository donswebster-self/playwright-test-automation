/** Test Case: RegistrationPage Tests
 * 
 * Tags @smoke @regression
 * 
 * Steps:
 * 1) Navigate to the Registration page
 * 2) Validate page title
 * 3) Validate page loads successfully
 * 4) Validate personal details attributes
 * 5) Validate address attributes
 * 6) Validate contact attributes
 * 7) Validate register button
 * 8) Validate new customer registration
 * 
 */

import { test } from '@playwright/test';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { GenerateRandomData } from '../../utils/GenerateRandomData';

test.describe('Registration page tests', () => {
    let registrationPage: RegistrationPage;
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

    test.beforeAll(async () => {
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
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("/auth/register");
        registrationPage = new RegistrationPage(page);
    });

    test('Validate registration page title @smoke @regression', async () => {
        await registrationPage.expectTitle(/Register - Practice Software Testing - Toolshop/);
    });

    test('Validate registration page loads successfully @smoke @regression', async () => {
        await registrationPage.expectPageLoaded();
    });

    test('Validate registration page personal details attributes @regression', async () => {
        await registrationPage.expectPersonalDetailsAttributes();

    });
    test('Validate registration page address attributes @regression', async () => {
        await registrationPage.expectAddressAttributes();

    });
    test('Validate registration page contact attributes @regression', async () => {
        await registrationPage.expectContactAttributes();
    });

    test('Validate registration page register button attributes @regression', async () => {
        await registrationPage.expectRegisterButtonAttributes();
    });

    test('Validate new customer registration @smoke @regression', async ({page}) => {
        await registrationPage.registerCustomer(firstName, lastName, dob, country, postalCode, houseNumber, street, city, state, phone, email, password);
        await page.waitForURL(/auth\/login/);
    });

})

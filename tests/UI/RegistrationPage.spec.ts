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
 * 
 */

import { test } from '@playwright/test';
import { RegistrationPage } from '../../pages/RegistrationPage';

test.describe('Registration page tests', () => {

    let registrationPage: RegistrationPage;

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

})

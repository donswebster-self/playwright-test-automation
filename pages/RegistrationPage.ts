import { BasePage } from './BasePage';
import { expect, type Locator, type Page } from '@playwright/test';

export class RegistrationPage extends BasePage {

    // Locators
    private readonly customerRegistrationHeading: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly dateOfBirthInput: Locator;
    private readonly countryComboBox: Locator;
    private readonly postalCodeInput: Locator;
    private readonly houseNumberInput: Locator;
    private readonly streetInput: Locator;
    private readonly cityInput: Locator;
    private readonly stateInput: Locator;
    private readonly phoneInput: Locator;
    private readonly emailAddressInput: Locator;
    private readonly passwordInput: Locator;
    private readonly registerButton: Locator;

    // Constructor
    constructor(page: Page) {
        super(page);

        this.customerRegistrationHeading = page.getByRole('heading', { name: 'Customer registration' });
        this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
        this.dateOfBirthInput = page.getByRole('textbox', { name: 'Date of Birth' });
        this.countryComboBox = page.getByRole('combobox', { name: 'Country' });
        this.postalCodeInput = page.getByRole('textbox', { name: 'Postal code' });
        this.houseNumberInput = page.getByRole('textbox', { name: 'House number' });
        this.streetInput = page.getByRole('textbox', { name: 'Street' });
        this.cityInput = page.getByRole('textbox', { name: 'City' });
        this.stateInput = page.getByRole('textbox', { name: 'State' });
        this.phoneInput = page.getByRole('textbox', { name: 'Phone' });
        this.emailAddressInput = page.getByRole('textbox', { name: 'Email address' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    // Action Methods
    async expectPageLoaded() {
        await expect(this.customerRegistrationHeading).toBeVisible();
        await expect(this.firstNameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible();
        await expect(this.dateOfBirthInput).toBeVisible();
        await expect(this.countryComboBox).toBeVisible();
        await expect(this.postalCodeInput).toBeVisible();
        await expect(this.houseNumberInput).toBeVisible();
        await expect(this.streetInput).toBeVisible();
        await expect(this.cityInput).toBeVisible();
        await expect(this.stateInput).toBeVisible();
        await expect(this.phoneInput).toBeVisible();
        await expect(this.emailAddressInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.registerButton).toBeVisible();
    }

    async expectPersonalDetailsAttributes() {
        await expect(this.firstNameInput).toHaveAttribute('placeholder', 'First name *');
        await expect(this.lastNameInput).toHaveAttribute('placeholder', 'Your last name *');
        await expect(this.dateOfBirthInput).toHaveAttribute('placeholder', 'YYYY-MM-DD');
    }

    async expectAddressAttributes() {
        await expect(this.postalCodeInput).toHaveAttribute('placeholder', 'Your Postcode *');
        await expect(this.streetInput).toHaveAttribute('placeholder', 'Your Street *');
        await expect(this.cityInput).toHaveAttribute('placeholder', 'Your City *');
        await expect(this.stateInput).toHaveAttribute('placeholder', 'Your State *');
    }

    async expectContactAttributes() {
        await expect(this.phoneInput).toHaveAttribute('placeholder', 'Your phone *');
        await expect(this.emailAddressInput).toHaveAttribute('placeholder', 'Your email *');
        await expect(this.passwordInput).toHaveAttribute('type', 'password');
        await expect(this.passwordInput).toHaveAttribute('placeholder', 'Your password');
    }

    async expectRegisterButtonAttributes() {
        await expect(this.registerButton).toHaveAttribute('type', 'submit');
    }

    async registerCustomer(
        firstname: string,
        lastname: string,
        dob: string,
        country: string,
        postalcode: string,
        housenumber: string,
        street: string,
        city: string,
        state: string,
        phone: string,
        email: string,
        password: string
    ) {
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastname);
        await this.dateOfBirthInput.fill(dob);
        await this.countryComboBox.selectOption(country);
        await this.postalCodeInput.fill(postalcode);
        await this.houseNumberInput.fill(housenumber.toString());
        await this.streetInput.fill(street);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.phoneInput.fill(phone);
        await this.emailAddressInput.fill(email);
        await this.passwordInput.fill(password);
        await this.registerButton.click();
    }

}
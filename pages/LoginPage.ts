import {BasePage } from './BasePage';
import {expect, type Locator, type Page } from '@playwright/test';

export class LoginPage extends BasePage {

    // Locators
    private readonly loginHeading: Locator;
    private readonly signInGoogleButton: Locator;
    private readonly emailAddressInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly registerAccountLink: Locator;
    private readonly forgotPasswordLink: Locator;

    // Constructor
    constructor(page: Page){
        super(page);

        this.loginHeading = page.getByRole('heading', {name: 'Login'});
        this.signInGoogleButton = page.getByRole('button', {name: 'Sign in with Google'});
        this.emailAddressInput = page.getByRole('textbox', {name: 'Email address'});
        this.passwordInput = page.getByRole('textbox', {name: 'Password'});
        this.loginButton = page.getByRole('button', {name: 'Login'});
        this.registerAccountLink = page.getByRole('link', {name: 'Register your account'});
        this.forgotPasswordLink = page.getByRole('link', {name: 'Forgot your Password?'});
    }

    // Action methods
    async expectPageLoaded(){
        await expect(this.loginHeading).toBeVisible();
        await expect(this.signInGoogleButton).toBeVisible();
        await expect(this.emailAddressInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }

    async expectSignInGoogleButtonAttributes(){
        await expect(this.signInGoogleButton).toHaveAttribute('aria-label', 'Sign in with Google');
    }

    async expectEmailAddressInputAttributes(){
        await expect(this.emailAddressInput).toHaveAttribute('type', 'email');
        await expect(this.emailAddressInput).toHaveAttribute('placeholder', 'Your email');
    }

    async expectPasswordInputAttributes(){
        await expect(this.passwordInput).toHaveAttribute('type', 'password');
        await expect(this.passwordInput).toHaveAttribute('placeholder', 'Your password');
    }

    async expectRegisterAccountLinkAttributes(){
        await expect(this.registerAccountLink).toHaveAttribute('href', '/auth/register');
        await expect(this.registerAccountLink).toHaveAttribute('aria-label', 'Register your account');
    }

    async expectForgotPasswordLinkAttributes(){
        await expect(this.forgotPasswordLink).toHaveAttribute('href', '/auth/forgot-password');
        await expect(this.forgotPasswordLink).toHaveAttribute('aria-label', 'Forgot your Password?');
    }

    async login(email:string, password:string) {
       await this.emailAddressInput.fill(email);
       await this.passwordInput.fill(password);
       await this.loginButton.click();
    }
}
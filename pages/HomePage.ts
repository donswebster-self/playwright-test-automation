import { BasePage } from './BasePage';
import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage extends BasePage {

    // Locators
    private readonly signInLink: Locator;
    private readonly languageButton: Locator;
    private readonly contactLink: Locator;
    private readonly categoriesButton: Locator;
    private readonly homeLink: Locator;
    private readonly brandLink: Locator;
    private readonly bannerImage: Locator;

    // Constructor
    constructor(page: Page) {
        super(page);

        this.signInLink = page.getByRole('link', { name: 'Sign in' });
        this.languageButton = page.getByRole('button', { name: 'Select language' });
        this.contactLink = page.getByRole('link', { name: 'Contact' });
        this.categoriesButton = page.getByRole('button', { name: 'Categories' });
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.brandLink = page.getByTitle('Practice Software Testing - Toolshop');
        this.bannerImage = page.getByRole('img', { name: 'Banner' });
    }

    // Action methods
    async expectPageLoaded() {
        await expect(this.homeLink).toBeVisible();
        await expect(this.categoriesButton).toBeVisible();
        await expect(this.signInLink).toBeVisible();
        await expect(this.brandLink).toBeVisible();
        await expect(this.bannerImage).toBeVisible();
    }

    async expectSignInLinkAttributes() {
        await expect(this.signInLink).toHaveAttribute('href', '/auth/login');
    }

    async expectLanguageButtonAttributes() {
        await expect(this.languageButton).toHaveAttribute('aria-label', 'Select language');
    }

    async expectContactLinkAttributes() {
        await expect(this.contactLink).toHaveAttribute('href', '/contact');
    }

    async expectHomeLinkAttributes() {
        await expect(this.homeLink).toHaveAttribute('href', '/');
    }

    async expectBannerImageAttributes() {
        await expect(this.bannerImage).toHaveAttribute('alt', 'Banner');
    }

}




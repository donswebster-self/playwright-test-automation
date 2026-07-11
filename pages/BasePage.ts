import { expect, type Page } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    // Constructor
    constructor(page: Page) {
        this.page = page;
    }

    // Action methods
    async navigate(){
        await this.page.goto('/')
    }

    // Check page title
    async expectTitle(title: string | RegExp) {
        await expect(this.page).toHaveTitle(title);
    }

}
import { Page, Locator } from '@playwright/test';

export class CheckoutFlow {
    readonly page: Page;
    // Cart Locators
    readonly checkoutButton: Locator;

    // Step 1: Your Information Locators
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;

    // Step 2 & 3 Locators
    readonly finishButton: Locator;
    readonly completeHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        // Cart
        this.checkoutButton = page.locator('#checkout');
        // Step 1
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        // Step 3
        this.finishButton = page.locator('#finish');
        this.completeHeader = page.locator('.complete-header');
    }

    async startCheckout() {
        await this.checkoutButton.click();
    }

    async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async finishPurchase() {
        await this.finishButton.click();
    }

    async getCompleteMessageText() {
        return this.completeHeader.textContent();
    }
}
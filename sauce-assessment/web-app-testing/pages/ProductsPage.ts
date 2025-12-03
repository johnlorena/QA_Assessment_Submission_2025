import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly cartIcon: Locator;
    readonly inventoryList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartIcon = page.locator('.shopping_cart_link');
        this.inventoryList = page.locator('.inventory_list');
    }

    // Use a dynamic locator to handle any product
    async addItemToCart(itemId: string) {
        const addToCartButton = this.page.locator(`#add-to-cart-${itemId}`);
        await addToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }

    async isPageVisible() {
        return this.inventoryList.isVisible();
    }
}
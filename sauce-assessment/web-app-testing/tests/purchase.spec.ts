import { test, expect } from '@playwright/test';
// Import the Page Object Model classes
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutFlow } from '../pages/CheckoutFlow';

// Define the core test scenario
test('User successfully completes the standard purchase flow', async ({ page }) => {
    // 1. Setup Page Objects
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutFlow = new CheckoutFlow(page);

    // 2. Navigation and Login
    await loginPage.goto();
    await loginPage.login('problem_user', 'secret_sauce');
    
    // ASSERTION 1: Verify successful login and landing page
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(productsPage.inventoryList).toBeVisible();

    // 3. Add Item to Cart
    await productsPage.addItemToCart('sauce-labs-backpack');
    await productsPage.goToCart();

    // ASSERTION 2: Verify cart is not empty before checkout
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    
    // 4. Checkout Information
    await checkoutFlow.startCheckout();
    await checkoutFlow.fillCheckoutInfo('Jane', 'Doe', '90210');
    
    // ASSERTION 3: Verify navigation to the Overview step
    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    
    // 5. Finalize Purchase
    await checkoutFlow.finishPurchase();

    // ASSERTION 4: Verify the final success state
    const successMessage = await checkoutFlow.getCompleteMessageText();
    await expect(successMessage).toEqual('Thank you for your order!');
});
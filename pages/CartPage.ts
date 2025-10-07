import { Locator, Page } from "@playwright/test";


export class CartPage {

   readonly page: Page
  
      constructor(page: Page) {
          this.page = page
    }

    async navigateToCartPage() {
    await this.page.goto(`https://coffee-cart.app/`);
    await this.page.getByLabel('Cart page').click()
    return this;
  }
}

import { Locator, Page } from "@playwright/test";

export class MainPage {
    
    readonly page: Page

    constructor(page: Page) {
        this.page = page

    }

    async navigateToMenuPage() {
    await this.page.goto(`https://coffee-cart.app`);
    return this;
  }

} 
import { Locator, Page } from "@playwright/test";


export class GithubPage {

   readonly page: Page
  
      constructor(page: Page) {
          this.page = page
    }

    async navigateToGithubPage() {
    await this.page.goto(`https://coffee-cart.app/`);
    await this.page.getByLabel('GitHub page').click()
    return this;
  }
}

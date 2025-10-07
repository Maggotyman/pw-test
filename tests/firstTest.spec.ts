import { test, expect } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";
import { MainPage } from "../pages/MainPage";
import { CartPage } from "../pages/CartPage";
import { GithubPage } from "../pages/GithubPage";



test('first test', async ({page}) => {
    
    const mainPage = new MainPage(page);
    const cartPage = new CartPage(page);
    const githubPage = new GithubPage(page);

    const drinkSelector = (drinkName: string) =>
        page.locator(`.cup-body[aria-label='${drinkName}']`)

    const checkout = page.locator(`[data-test='checkout']`);
    const nameInput = page.locator(`#name`);
    const emailInput = page.locator(`#email`);
    const submitPayment = page.locator(`#submit-payment`);



    await mainPage.navigateToMenuPage()
    await argosScreenshot(page, "menu_page")
    await drinkSelector("Flat White").click()
    await page.getByLabel('Cart page').click()
    await checkout.click()
    await nameInput.type("Max Root");
    await emailInput.type("maxroot@gmail.com");
    await submitPayment.click();
   
})
import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/MainPage";
import { argosScreenshot } from "@argos-ci/playwright";

test('first test', async ({page}) => {
    
    const mainPage = new MainPage(page);

    await mainPage.navigateToMenuPage()
    await argosScreenshot(page, "menu_page")
})
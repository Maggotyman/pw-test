import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/MainPage";

test('first test', async ({page}) => {
    
    const mainPage = new MainPage(page);

    await mainPage.navigateToMenuPage()
})
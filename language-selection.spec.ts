import {test, expect} from '@playwright/test';

test.describe('Switching languages', () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://staging.wellbee.pl/en");
    })

    test('Polish Lang', async ({page}) => {
        await page.getByRole('button', {name: "English"}).click();
        await page.getByRole('menuitem', {name: "Polski"}).click();
        await expect(page).toHaveURL("https://staging.wellbee.pl/");
    });

    test('Russian Lang', async ({page}) => {
        await page.getByRole('button', {name: "English"}).click();
        await page.getByRole('menuitem', {name: "Русский"}).click();
        await expect(page).toHaveURL("https://staging.wellbee.pl/ru");
    });

    test('Ukranian Lang', async ({page}) => {
        await page.getByRole('button', {name: "English"}).click();
        await page.getByRole('menuitem', {name: "Українська"}).click();
        await expect(page).toHaveURL("https://staging.wellbee.pl/uk");
    })
})
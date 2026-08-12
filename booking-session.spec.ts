import { test, expect } from '@playwright/test';
test.setTimeout(40000);
test.describe('Booking a session / entering wait list', () => {
  test.beforeEach( async ({page})=> {
    await page.goto("https://staging.wellbee.pl/en");
    await page.getByRole('link', {name: "BOOK A SESSION"}).click();
    await expect(page).toHaveURL("https://staging.wellbee.pl/en/znajdz-terapeute");
  });

  test('Individual therapy', async ({page}) => {
    await page.getByRole('button', {name: "Individual therapy"}).click();
    await expect(page).toHaveURL("https://staging.wellbee.pl/en/znajdz-terapeute/terapia-indywidualna/obszar-wsparcia");
    await page.locator('div[role="button"].MuiChip-root').first().click();
    const selectedTopics = page.locator('div[role="button"].MuiChip-colorPrimary');
    await expect(selectedTopics).not.toHaveCount(0);
    await page.getByRole('button', {name: "Next"}).click();
    await expect(page).toHaveURL("https://staging.wellbee.pl/en/znajdz-terapeute/terapia-indywidualna/styl1");
    await page.getByRole('button').nth(1).click();
    await expect(page).toHaveURL("https://staging.wellbee.pl/en/znajdz-terapeute/terapia-indywidualna/styl2");
    await page.getByRole('button').nth(1).click();
    await page.getByRole("button", {name: "Search"}).click();
    await page.getByPlaceholder("Search").fill("endtoendtest endtoendtest");
    await page.getByRole('link').filter({hasText: "endtoendtest endtoendtest"}).click();
    await expect(page).toHaveURL("https://staging.wellbee.pl/en/nasi-specjalisci/endtoendtest-endtoendtest?bookingFlow=true");
    await page.getByRole('button', {name: "JOIN THE WAITING LIST"}).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await dialog.getByPlaceholder('E-mail').fill('testemailtest@gmail.com');
    await dialog.getByPlaceholder('732108206').fill('123456789');
    await expect(async () => {
      await dialog.locator('label').filter({ hasText: 'I acknowledge that my data' }).click();
    }).toPass();
    await dialog.getByRole('button', {name: "Send"}).click();
    await expect(dialog).toBeHidden();

  });


});
import { test, expect } from '@playwright/test';



test.describe('About Us', () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://staging.wellbee.pl/o_nas");
  })

  test('Signing Up to a Newsletter', async({page}) => {
    const timestamp = Date.now();  
    const uniqueEmail = `unittest${timestamp}@gmail.com`;
    const formData = page.locator('form').filter({hasText: "O zdrowiu psychicznym"});


    await formData.getByPlaceholder('Imię').fill("Jamesbond");
    await formData.getByPlaceholder('Adres e-mail').fill(uniqueEmail);

    await expect(async () => {
      await formData.getByLabel("Zapoznałem").click();
      await formData.getByLabel("Wyrażam zgodę").click();
    }).toPass();


    const signupButtn = formData.getByRole('button', {name: "Zapisuję się!"});
    const successText = formData.getByText('Zapisano!');

    await signupButtn.click();
    await expect(signupButtn).toBeHidden();
    await expect(successText).toBeVisible();
    });
});
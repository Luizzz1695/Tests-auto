const { Given, When, Then } = require('@cucumber/cucumber');
const RegisterPage = require('../pageObjects/register.page');

Given('I am on the registration page', async () => {
  await browser.url('app://MaterialLoginExample');
});

When('I enter valid registration details', async () => {
  await RegisterPage.register(
    'Luis Rojas',               
    '123 Mainx Street',          
    'luisfra@example.com',      
    '7896541230',               
    'contra123',                
    'contra123'                 
  );
});

Then('I should see a confirmation message', async () => {
  const confirmationMessage = await $('android=new UiSelector().resourceId("confirmation_message")');
  expect(await confirmationMessage.isDisplayed()).toBe(true);
});

Given('I am on the registration page and want to log in', async () => {
  await browser.url('app://MaterialLoginExample');
});

When('I click on "Already a member?"', async () => {
  await RegisterPage.goToLoginPage();
});

Then('I should be redirected to the login page', async () => {
  const currentUrl = await browser.getUrl();
  expect(currentUrl).toContain('login');
});

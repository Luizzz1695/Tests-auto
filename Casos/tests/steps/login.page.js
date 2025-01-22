const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageObjects/login.page');

Given('I am on the login page', async () => {
  await browser.url('app://MaterialLoginExample');
});

When('I enter valid credentials', async () => {
  await LoginPage.login('testuser', 'password123');
});

Then('I should be redirected to the dashboard', async () => {
  const currentUrl = await browser.getUrl();
  expect(currentUrl).toContain('dashboard');
});
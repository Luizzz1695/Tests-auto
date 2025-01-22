const { Before, After } = require('@cucumber/cucumber');

Before(async () => {
  await browser.startActivity('com.example', '.MainActivity');
});

After(async () => {
  await browser.closeApp();
});
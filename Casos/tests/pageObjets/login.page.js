class LoginPage {
    get usernameInput() { return $('android=new UiSelector().resourceId("username")'); }
    get passwordInput() { return $('android=new UiSelector().resourceId("password")'); }
    get loginButton() { return $('android=new UiSelector().resourceId("login_button")'); }
  
    async login(username, password) {
      await this.usernameInput.setValue(username);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
    }
  }
  module.exports = new LoginPage();
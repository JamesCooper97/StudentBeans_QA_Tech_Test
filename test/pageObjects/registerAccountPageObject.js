const ParentPageObject = require('./parentPageObject')

class RegisterAccountPageObject extends ParentPageObject {
    async typeIntoEmailField (email) {
      //Code to enter text into the email field
      const emailField = await $('input[id="email"]')
      await emailField.setValue(email)
    }

    async typeIntoPasswordField(password) {
        //Code to enter text into the password field
        const passwordField = await $('input[id="password"]')
        await passwordField.setValue(password)
    }

    async verifyEmailErrorIsVisible(){
        const inputAlertEmail = await $('//*[@id="authorisation_root"]/div/div/div[2]/div[4]/form/div[1]/div[1]/p')
        this.isElementEqualToExpected(inputAlertEmail, 'The email is invalid. ') //theres a space on the webpage here? added a space to make test pass
    }
    
    async verifyPasswordErrorIsVisible(){
        const inputAlertPassword = await $('//*[@id="authorisation_root"]/div/div/div[2]/div[4]/form/div[2]/div[1]/p')
        this.isElementEqualToExpected(inputAlertPassword, 'Your password must be at least 8 characters')
    }

    async verifyTitle() {
        await this.isElementEqualToExpected($('h1="Create an account"'), 'Create an account')
    }
}
 
module.exports = RegisterAccountPageObject
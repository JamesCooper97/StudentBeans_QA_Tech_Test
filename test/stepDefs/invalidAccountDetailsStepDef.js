const { When, Then } = require('@cucumber/cucumber')

const RegisterAccountPageObject = require('../pageObjects/registerAccountPageObject')

const registerAccountPageObject = new RegisterAccountPageObject()

When('I enter an invalid email {string} and invalid password {string}', async (email, password) => {
    //Code here entering in invalid email and password data
    await registerAccountPageObject.typeIntoEmailField(email)
    await registerAccountPageObject.typeIntoPasswordField(password)
})

Then('I am shown an error message for both the email and password field' , async () => {
    //Code here for validating whether the email and password error messages are shown
    await registerAccountPageObject.verifyEmailErrorIsVisible()
    await registerAccountPageObject.verifyPasswordErrorIsVisible()
})
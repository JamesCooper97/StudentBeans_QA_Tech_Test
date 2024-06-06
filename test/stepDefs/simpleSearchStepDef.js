const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.acceptCookies()
  await simpleSearchPageObject.verifyHomePage()
})

Given('I open the search bar', async () => {
  //Code here for opening the search bar
  await simpleSearchPageObject.openSearchBar()
})

Given('I select to register an account', async () => {
  //Code here for navigating to register an account
  await simpleSearchPageObject.clickRegisterUserButton()
})

When('I enter {string}', async (value) => {
  //Code here for entering value into the search bar
  await simpleSearchPageObject.typeSearch(value)
})

/*  Suggestion to re-write this scenario step - use this as the action step with When and have a further evaluation step, 
    evaluating whether the 4th recommend is open. Would suggest a title evaluation
*/
Then('I should select the 4th {string} search listing', async (value) => {
  //Code here for evaluating
  await simpleSearchPageObject.click4thListing()
  await simpleSearchPageObject.evaluate4thListingOpened()
})

Given('I navigate to the trending now page', async () => {
  //Code here for navigating to the trending now page
  await simpleSearchPageObject.navigateToTrendingNow()
})
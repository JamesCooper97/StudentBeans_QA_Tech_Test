const { When, Then } = require('@cucumber/cucumber')

const TrendingNowPageObject = require('../pageObjects/trendingNowPageObject')

const trendingNowPageObject = new TrendingNowPageObject()

When('I select the 6th trending now offer' , async () => {
    //Code here for selecting the 6th trending now offer. Offer selection hardcoded for now
    await trendingNowPageObject.clickTrendingNumber(5) //Indexed so 5
  })

Then('I am taken to the offers page' , async () => {
    //Code here for validating the opened offers page
    await trendingNowPageObject.verifyTrendingProductPage()
})
const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {

  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('/uk')
  }

  async acceptCookies () {
    //the below call clears the accept cookies modal
    browser.pause(5000)
    const acceptCookiesButton = await $('#onetrust-accept-btn-handler')
    await acceptCookiesButton.click()
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('/html/body/div[1]/div/main/div/div[1]/div[1]/div/div[1]/div[1]/h1[2]'), 'The best student discounts from your favourite shops')
  }

  
  async openSearchBar() {
    const searchBar = await $('button[data-testid="nav-search-desktop"]')
    await searchBar.click()
  }

  //Function to type in the search bar
  async typeSearch(value) {
    console.log('I am here! value is ' + value)
    const searchBarField = await $('input[data-testid="search-input"]')
    await searchBarField.setValue(value)
  }

  //could be made reusable by enterring in the index of the search list wanted
  async click4thListing() {
    const fourthSearch = await $('//html/body/div[5]/div/div/div/div[2]/div/div[4]/a')
    //const fourthSearch = await $$('div[role="presentation"]')[3]
    this.evaluatingText = await $('/html/body/div[5]/div/div/div/div[2]/div/div[4]/a/div[2]/p[2]').getText()
    console.log("I have search listing header " + this.evaluatingText)
    await fourthSearch.click()
  }

  //Checks that the listing is opened and the relevant discount is selected
  async evaluate4thListingOpened() {
    const selectedDiscount = await $('article[data-offer-selected="true"]')
    const selectedDiscountHeader = selectedDiscount.$('h4[itemprop="name"]')
    await this.isElementEqualToExpected(selectedDiscountHeader,this.evaluatingText)
  }

  //Function clicks the Trending now link on the home page
  async navigateToTrendingNow() {
    const trendingNow = await $('a[data-testid="nav-category-trending-now"]')
    await trendingNow.click()
  }

  //Function clicks the register button on the home page
  async clickRegisterUserButton() {
    const registerButton = await $('=Register')
    await registerButton.click()
  }

}

module.exports = SimpleSearchPageObject

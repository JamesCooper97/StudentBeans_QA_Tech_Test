const ParentPageObject = require('./parentPageObject')

class TrendingNowPageObject extends ParentPageObject {
    async verifyTrendingNowPage () {
        // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
        expectChai(await browser.getUrl()).toHaveURL('/uk/trending-discounts?source=nav')
    }

    async clickTrendingNumber (value) {
        const trendingArticle = await $$('article[itemprop="offers"]')[value]
        trendingArticle.$('a').click() //clicks hyperlink of this article
    }

    async verifyTrendingProductPage() {
        const trendingProductTitle = await $('h1[data-testid="brand-name"]')
        await this.isElementEqualToExpected(trendingProductTitle,'boohoo Student Discounts')
        //further assertions could be made, such as image and description
    }

}

module.exports = TrendingNowPageObject
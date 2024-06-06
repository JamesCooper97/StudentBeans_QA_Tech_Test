const { assert } = require('chai')

class ParentPageObject {
  //Constructor so that text can be evaluated across functions
  constructor(){
    this.evaluatingText = "Text not defined"
  }
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.equal(expectedText))
  }
}

module.exports = ParentPageObject

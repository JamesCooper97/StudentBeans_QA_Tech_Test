Feature: Trending Now Offers

Scenario: As a user I want to navigate to the trending now page and be shown a selection of trending offers
  Given I am on the studentbeans homepage
  And I navigate to the trending now page
  When I select the 6th trending now offer
  Then I am taken to the offers page
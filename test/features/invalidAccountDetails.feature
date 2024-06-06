Feature: Invalid Email and Password

Scenario: As a user when I enter an invalid email and password I want to error messages for both
  Given I am on the studentbeans homepage
  And I select to register an account
  When I enter an invalid email "test.com" and invalid password "123"
  Then I am shown an error message for both the email and password field
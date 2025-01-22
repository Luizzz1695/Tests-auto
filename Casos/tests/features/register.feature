Feature: Registration

  Scenario: User registers with valid details
    Given I am on the registration page
    When I enter valid registration details
    Then I should see a confirmation message
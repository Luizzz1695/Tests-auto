Feature: Login

  Scenario: User logs in with valid credentials
    Given I am on the login page
    When I enter valid login credentials
    Then I should be redirected to the dashboard
    And I should see the welcome message
Feature: About us feature 
  Scenario: Verify Qentelli Website Pages
    Given I navigate to the Qentelli Website
    Then I verify Company brand is displayed
    When I click on About Us Navigation link
    Then I verify Our Vision and Mission text is displayed
    Then I verify Our Vision and Mission cards text is displayed

Feature: Test
  Scenario: Verify javascript.info shadow-dom Page
    Given I navigate to the ShadowRoot Demo Page
    Then I verify ShadowRoot Demo page description is displayed
    And I verify Shadow Root Element is displayed

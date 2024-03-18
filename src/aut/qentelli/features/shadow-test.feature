Feature: Shadow Test
  Scenario: Verify javascript.info shadow-dom Page
    Given I navigate to the ShadowRoot Demo Page
    Then I verify ShadowRoot Demo page description is displayed
    And I verify Shadow Root Element is displayed

  Scenario: Verify Request Demo in Ted Platform Page
  Given I navigate to the Qentelli Website
  Then I verify Company brand is displayed
  And I verify Product is displayed
  When I click on product button
  Then I verify product options are displayed
  When I click on product options
  Then I verify TED link is displayed
  When I click on TED Tab
  And I verify Request Demo is displayed
Feature: Test
  Scenario: Verify Qentelli Website Pages
    Given I navigate to the Qentelli Website
    Then I verify Company brand is displayed
    And I verify About Us Navigation link is displayed
    When I click on About Us Navigation link
    Then I verify About Us page is displayed
    And I verify Contact Us Navigation link is displayed
    When I click on Contact Us Navigation link
    Then I verify Contact Us page is displayed

  Scenario: Verify thought leadership page links
    Given I navigate to the Qentelli Website
    Then I verify Company brand is displayed
    And I verify Product is displayed
    When I click on product button
    Then I verify thought leadership button is displayed
    When I click on the thought leadership button
    Then I verify thought leadership section
    And I verify Product link on thought leadership
    And I verify TED link on thought leadership
    And I verify automagiq link on thought leadership
    And I verify thought leadership links on thought leadership
    And I verify Qentelli branding on thought leadership
Feature: Test
  # Scenario: Verify Qentelli Website Pages
  #   Given I navigate to the Qentelli Website
  #   Then I verify Company brand is displayed
  #   And I verify About Us Navigation link is displayed
  #   When I click on About Us Navigation link
  #   Then I verify About Us page is displayed
  #   And I verify Contact Us Navigation link is displayed
  #   When I click on Contact Us Navigation link
  #   Then I verify Contact Us page is displayed
  Scenario: Verify Qentelli Products page 
    Given I navigate to the Qentelli Website
    Then I Verify Product link is desplayed
    When I click on Products Navigation link
    Then I verify Discover Our Featured Products is desplayed
    And I verify Streamlined Engineering Governance is displayed
 #   Then I verify TED offers a comprehensive text is displayed
    When I click on Learn More About TED 
    
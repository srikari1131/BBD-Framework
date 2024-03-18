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
  
  Scenario: Verify Qentelli Website Home Page Headings Text
    Given I navigate to the Qentelli Website
    Then I verify Company brand is displayed
    And I verify the headings percentage displayed 
    And I verify the headings text displayed
    And I verify the headings paragraph displayed
    

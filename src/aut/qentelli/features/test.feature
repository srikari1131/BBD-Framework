Feature: Test

 Scenario: Verify Qentelli Thought Leadership Page
    Given I navigate to the Qentelli Website
    Then I verify Company brand is displayed
    And I verify Solutions Navigation link is displayed
    And I verify Thought Leadership Navigation link is displayed
    And I verify About Us Navigation link is displayed
    And I verify Contact Us Navigation link is displayed
    When I click on Thought Leadership Navigation link 
    Then I verify Thought Leadership page is displayed





  

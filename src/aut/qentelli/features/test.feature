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
    
    @Bhavya_P
    Scenario: Verify Qentelli Website Solutions Pages
    Given I navigate to the qentelli website
    Then  I verify home page is displayed
    And   I mouseover on solutions tab on home page
    When  I click on sap tab
    Then  I verify sap page is displyed 
    And   I verify the header text displayed on the sap page
    And   I verify the sub text displayed on the sap page
    When  I click on talk to an expert button directly
    #Then  I verify mandatory alert message is displayed 

    #Unable to completet the last step i.e (Tool Tip Text on empty submission)





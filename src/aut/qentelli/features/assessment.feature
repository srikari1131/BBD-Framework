Feature: ContactUs

  Scenario: Verify ContactUs functionality
    Given I navigate to the Qentelli Website
    Then I verify Company brand is displayed
    And I verify Contact Us Navigation link is displayed
    When I click on Contact Us Navigation link
    Then I verify Contact Us page is displayed
    And I verify ContactUs Submit Form
    Then I verify name field is displayed in form
    Then I verify email field is displayed in form
    Then I verify message field is displayed in form
    And I verify submit button field is displayed in form
    Then I click on submit button field

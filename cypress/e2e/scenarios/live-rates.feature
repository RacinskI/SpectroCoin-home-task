Feature: Validate that live rates in 24 hours are positive

  Scenario: Customer is able to check that EUR currency was positive in 24hours in the currency list
    Given customer is in the live rates page
    When customer selects "GBP" as reference currency from the list
    And customer select "Banker" currency rate
    Then selected currency rate is positive
    And field color is green for "Banker" currency

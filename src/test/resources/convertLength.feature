Feature: Convert length
  User should be able to convert lengths from one unit to another

  Background: Application is opened
    Given I open the application

  Scenario Outline: Convert from foot to centimeter
    Given I see converter from "Foot" to "Centimeter"
    When I tap "<number>" in the number pad
    Then I should see "<number>" and "ft" in the source
    And I should see the result "<result>" and "cm" in the target

    Examples:
      | number | result |
      | 5      | 152.4  |
      | 9      | 274.32 |

  Scenario: Switch length units
    Given I see converter from "Foot" to "Centimeter"
    And I tap "5" in the number pad
    When I tap in "switch" button
    Then I see converter from "Centimeter" to "Foot"
    Then I should see "5" and "cm" in the source
    And I should see the result "0.164" and "ft" in the target

  Scenario: Show all length conversions
    Given I see converter from "Foot" to "Centimeter"
    And I tap "5" in the number pad
    When I tap in "Show All" button
    Then I should see the title with "Foot (ft)" and "5"
    And I should see all conversion units

  Scenario: Delete value
    Given I see converter from "Foot" to "Centimeter"
    And I tap "5" in the number pad
    And I tap "6" in the number pad
    When I tap in "C" button
    Then I should see "1" and "ft" in the source
    And I should see the result "30.48" and "cm" in the target

  Scenario: Change first unit of conversion
    Given I see converter from "Foot" to "Centimeter"
    When I select "Millimeter" in the source dropdown
    Then I should see in the "source" dropdown "Millimeter"
    And I should see "1" and "mm" in the source

  Scenario: Change second unit of conversion
    Given I see converter from "Foot" to "Centimeter"
    When I select "Meter" in the target dropdown
    Then I should see in the "target" dropdown "Meter"
    And I should see the result "0.3048" and "m" in the target

  Scenario: Convert number with more than one number
    Given I select "Millimeter" in the source dropdown
    And I select "Meter" in the target dropdown
    When I tap "4" in the number pad
    And I tap "5" in the number pad
    And I tap "0" in the number pad
    And I tap "0" in the number pad
    Then I should see "4500" and "mm" in the source
    And I should see the result "4.5" and "m" in the target

  Scenario: Correct input value
    Given I select "Millimeter" in the source dropdown
    And I select "Meter" in the target dropdown
    And I tap "4" in the number pad
    And I tap "5" in the number pad
    And I tap "0" in the number pad
    And I tap "0" in the number pad
    When I tap in "delete" button
    Then I should see "450" and "mm" in the source
    And I should see the result "0.45" and "m" in the target

  Scenario: Select same unit length
    Given I select "Millimeter" in the source dropdown
    And I select "Meter" in the target dropdown
    And I tap "4" in the number pad
    And I tap "5" in the number pad
    And I tap "0" in the number pad
    When I select "Millimeter" in the target dropdown
    Then I should see "450" and "mm" in the source
    And I should see the result "450" and "mm" in the target
Feature: Convert speed
  User should be able to convert speeds from one unit of speed to another

  Background: Application is opened
    Given I open the application
    And I go to Speed converter

  Scenario Outline: Convert from Mile per hour to Kilometer per hour
    Given I see converter from "Mile per hour" to "Kilometer per hour"
    When I tap "<number>" in the number pad
    Then I should see "<number>" and "mph" in the source
    And I should see the result "<result>" and "km/h" in the target

    Examples:
      | number | result   |
      | 5      | 8.04672  |
      | 9      | 14.4841  |

  Scenario: Switch speed units
    Given I see converter from "Mile per hour" to "Kilometer per hour"
    And I tap "5" in the number pad
    When I tap in "switch" button
    Then I see converter from "Kilometer per hour" to "Mile per hour"
    Then I should see "5" and "km/h" in the source
    And I should see the result "3.1069" and "mph" in the target

  Scenario: Show all length conversions
    Given I see converter from "Mile per hour" to "Kilometer per hour"
    And I tap "5" in the number pad
    When I tap in "Show All" button
    Then I should see the title with "Mile per hour (mph)" and "5"
    And I should see all conversion units

  Scenario: Delete value
    Given I see converter from "Mile per hour" to "Kilometer per hour"
    And I tap "5" in the number pad
    And I tap "6" in the number pad
    When I tap in "C" button
    Then I should see "1" and "mph" in the source
    And I should see the result "1.6093" and "km/h" in the target

  Scenario: Change first unit of conversion
    Given I see converter from "Mile per hour" to "Kilometer per hour"
    When I select "Kilometer per second" in the source dropdown
    Then I should see in the "source" dropdown "Kilometer per second"
    And I should see "1" and "km/s" in the source
    And I should see the result "3 600" and "km/h" in the target

  Scenario: Change second unit of conversion
    Given I see converter from "Mile per hour" to "Kilometer per hour"
    When I select "Meter per second" in the target dropdown
    Then I should see in the "target" dropdown "Meter per second"
    And I should see the result "0.447" and "m/s" in the target

  Scenario: Convert number with more than one number
    Given I select "Meter per hour" in the source dropdown
    And I select "Mile per minute" in the target dropdown
    When I tap "4" in the number pad
    And I tap "5" in the number pad
    And I tap "0" in the number pad
    And I tap "0" in the number pad
    Then I should see "4500" and "m/h" in the source
    And I should see the result "0.0466" and "mpm" in the target

  Scenario: Correct input value
    Given I select "Meter per hour" in the source dropdown
    And I select "Mile per minute" in the target dropdown
    And I tap "4" in the number pad
    And I tap "5" in the number pad
    And I tap "0" in the number pad
    And I tap "0" in the number pad
    When I tap in "delete" button
    Then I should see "450" and "m/h" in the source
    And I should see the result "0.00466" and "mpm" in the target

  Scenario: Select same unit length
    Given I select "Meter per hour" in the source dropdown
    And I select "Mile per minute" in the target dropdown
    And I tap "4" in the number pad
    And I tap "5" in the number pad
    And I tap "0" in the number pad
    When I select "Meter per hour" in the target dropdown
    Then I should see "450" and "m/h" in the source
    And I should see the result "450" and "m/h" in the target
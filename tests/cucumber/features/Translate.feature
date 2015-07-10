Feature: One-liner description of this feature
  As a user,
  I want to choose a sentence to translate
  So that I can put my own translation for that sentence.

  # The background will be run for every scenario
  Background:
    Given I am a user

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario: This scenario will run on both dev and CI
    When select the the sentence "Try my best"
    And input the translate "Co len nao"
    And submit translate
    Then I see the response "Try my best" "Co len nao"

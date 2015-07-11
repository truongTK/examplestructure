Feature: Translate a sentences
  As a user,
  I want to choose a sentence to translate
  So that I can put my own translation for that sentence.

  # The background will be run for every scenario
  Background:
    Given I am a user

  @dev
  Scenario:
    When select the the sentence "Try my best"
    And input the translate "Co len nao"
    And submit translate
    Then I see the response "Try my best" "Co len nao"

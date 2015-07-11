Feature: MAKE A SENTENCE WHICH IS NEEDED TO TRANSLATE
  As a user,
  I want to input a sentence in the language of my choice
  and ask for it to be translated to another language of my choice
  So that fill the form and show the request

  # The background will be run for every scenario
  Background:
    Given I am a user

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When input sentence "Try my best"
    And input language from "English"
    And input language to "Vietnamese"
    And submit sentence
    Then I see the request "Try my best" "English" "Vietnamese"

  Background:
    Given had inputed

    @dev
    Scenario:
      When input sentence "Cố lên"
      And input language from "Vietnamese"
      And input language to "French"
      And submit sentence
      Then I see the request "Cố lên" "Vietnamese" "French"

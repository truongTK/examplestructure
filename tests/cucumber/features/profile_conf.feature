Feature: ADD PROFILE
  As a user,
  I want to choose the languages I want to learn and the languages I am fluent at
  when I first log in

  # The background will be run for every scenario
  Background:
    Given I am a new user

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  @dev
  Scenario: As a new user, i want to create an account
    When I create account with "test@twin.vn" as username and "123456" as password
    And I login with account just created
    And Click button "profile-button"
    And Add language to learn "English"
    And Add Language fluently "Vietnamese"
    Then Test language to learn
    And Test language fluently
    And Click button back-button

Feature: TEST LOGIN

  As a user
  I want to be able to register or choose Facebook/Google/Tweeter credential
  So that I can log in

  The story above is to set context for the reader. It doesn't actually have any impact on the test
  itself. The phrases inside the scenarios are ties to test code using regex, which you can see in
  /tests/features/step_definitions/steps.js

  In this textual part of the file, you can include context about this feature, you can add links to
  external documents and whatever is needed to create the full specification.

  # The background will be run for every scenario
  Background:
    Given I am a new user

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario: As a new user, i want to create an account
    When I create account with "test@twin.vn" as username and "123456" as password
    Then I login with account just created
    And I click sign out button

  @dev
  Scenario: As a facebooker
    When I click Sign in with Facebook
    Then I login with my Facebook account

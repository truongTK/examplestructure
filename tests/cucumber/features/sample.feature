Feature: One-liner description of this feature

  As a [role]
  I want [feature]
  So that [benefit]

  The story above is to set context for the reader. It doesn't actually have any impact on the test
  itself. The phrases inside the scenarios are ties to test code using regex, which you can see in
  /tests/features/step_definitions/steps.js

  In this textual part of the file, you can include context about this feature, you can add links to
  external documents and whatever is needed to create the full specification.

  # The background will be run for every scenario
  Background:
    Given I view home page

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario: As a old user, i want to login this page
    When I sign in with "toanpp@twin.vn"
    Then I should see "User not found"

  @dev
  Scenario: As a new user, i want to create an account
    When I create account with "toanpp1@twin.vn" as username and "123456" as password
    Then I should see "toanpp@twin.vn" on top


  # This scenario will not run as part of the Meteor dev cycle because it does not have the @dev tag
  # But it will run on CI if you use `meteor --test` for instance
  Scenario: This scenario will not run on dev but does run on CI
    When I navigate to "/"
    Then I should see the title "another intentional failure"

  # The @ignore tag is a convenience tag included by meteor-cucumber. See the docs for more on tags
  @ignore
  Scenario: This scenario will not run anywhere
    When I navigate to "/"
    Then I should see the title "it really doesn't matter"

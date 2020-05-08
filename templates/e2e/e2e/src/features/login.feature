@homepage
Feature: 001 Login
  The login page allows the users to log in.

  @goto @happy
  Scenario: Home Page
    Given I am on the "anmelden" page
    When I do nothing
    Then I should see the page title "Anmelden"

  @login @happy
  Scenario: The login button should be disabled when I enter the login page
    Given I am on the "anmelden" page
    Then The button "anmelden-login-button" should be disabled

  @login @happy
  Scenario: The login button should stay disabled if the user/password is too short
    Given I am on the "anmelden" page
    When I enter "a" in the input field "login-user-input"
    When I enter "d" in the input field "login-password-input"
    Then The button "anmelden-login-button" should be disabled

  @login @happy
  Scenario: The login button should be enabled when user/password is long enough
    Given I am on the "anmelden" page
    When I enter "Marc" in the input field "login-user-input"
    When I enter "123" in the input field "login-password-input"
    Then The button "anmelden-login-button" should be enabled

  @login @unhappy
  Scenario: When I log in with a user that is not authorized I should get an error and cannot navigate further
    Given I am on the "anmelden" page
#      And I expect errors in the logfile
    When I enter "unauthorized" in the input field "login-user-input"
    When I enter "def" in the input field "login-password-input"
    When I click the button "anmelden-login-button"
    Then I should see an error message containing "Es gab einen Fehler bei der Anmeldung" displayed
    Then The specific element "nav-logout-link" should be missing

  @login @happy
  Scenario: I can log in with the right credentials
    Given I am on the "anmelden" page
    When I enter "abc" in the input field "login-user-input"
    When I enter "def" in the input field "login-password-input"
    When I click the button "anmelden-login-button"
    Then The specific element "nav-logout-link" should exist

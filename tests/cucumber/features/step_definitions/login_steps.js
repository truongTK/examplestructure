(function () {

  'use strict';

  // You can include npm dependencies for support files in tests/cucumber/package.json
  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function () {

    var url = require('url');
    this.Given(/^I am a new user$/, function () {
      return this.server.call('reset');
    });
    this.When(/^I create account with "([^"]*)" as username and "([^"]*)" as password$/, function (username, password, callback) {
      this.client
      .url(process.env.ROOT_URL)
      .waitForExist('body *')
      .waitForVisible('body *')
      .click('#login-sign-in-link')
      .click('#signup-link')
      .setValue('#login-email', username)
      .setValue('#login-password', password)
      .click('#login-buttons-password')
      .call(callback);
    });

    this.Then(/^I login with account just created$/, function (callback) {
      this.client
      .url(process.env.ROOT_URL)
      .waitForExist('body *')
      .waitForVisible('body *')
      .click('#login-sign-in-link')
      .setValue('#login-email', 'test@twin.vn')
      .setValue('#login-password', '123456')
      .click('#login-buttons-password')
      .call(callback);
    });

    this.Then(/^I click sign out button$/, function (callback) {
      this.client
      .click('.login-button')
      .call(callback);
    });

    this.When(/^I click Sign in with Facebook$/, function (callback) {
      this.client
      .url(process.env.ROOT_URL)
      .waitForExist('body *')
      .waitForVisible('body *')
      .click('#login-sign-in-link')
      //.click('.text-besides-image sign-in-text-facebook')
      .call(callback);
    });

    this.Then(/^I login with my Facebook account$/, function (callback) {
      this.client.call(callback);
    });

  };
})();

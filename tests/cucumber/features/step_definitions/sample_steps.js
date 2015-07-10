var assert = require('assert');
(function () {

  'use strict';

  // You can include npm dependencies for support files in tests/cucumber/package.json
  var _ = require('underscore');


  module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');

    this.Given(/^I view home page$/, function () {
      // no callbacks! DDP has been promisified so you can just return it
      return this.server.call('reset'); // this.ddp is a connection to the mirror
    });

    this.When(/^I sign in with "([^"]*)"$/, function (arg1, callback) {
      this.client.
      url(process.env.ROOT_URL).
      waitForExist('body *').
      waitForVisible('body *').
      click('#login-sign-in-link').
      setValue('#login-email', 'toanpp@twin.vn').
      setValue('#login-password', '123456').
      click('#login-buttons-password').
      call(callback);
    });

    this.Then(/^I should see "([^"]*)"$/, function (arg1, callback) {
      this.client.
      getText('.message error-message', function(text) {
        assert.equal(text, 'User not found')}).
      call(callback);
    });

    this.When(/^I create account with "([^"]*)" as username and "([^"]*)" as password$/, function (username, password, callback) {
      this.client.
      url(process.env.ROOT_URL).
      waitForExist('body *').
      waitForVisible('body *').
      click('#login-sign-in-link').
      click('#sign-up-link').
      setValue('#login-email', username).
      setValue('#login-password', password).
      click('#login-buttons-password').
      call(callback);
    });

    this.Then(/^I should see "([^"]*)" on top$/, function (arg1, callback) {
      this.client.
      getText('#login-name-link', function(text) {
        console.log(text);}).
      call(callback);
    });


    };

   })();

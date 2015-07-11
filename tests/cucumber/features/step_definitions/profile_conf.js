(function () {

  'use strict';

  // You can include npm dependencies for support files in tests/cucumber/package.json
  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function () {

    this.When(/^Click button "([^"]*)"$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^Add language to learn "([^"]*)"$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^Add Language fluently "([^"]*)"$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^Test language to learn$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^Test language fluently$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^Click button back\-button$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });
  }
})()

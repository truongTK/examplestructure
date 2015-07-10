var assert = require('assert');

(function () {

  'use strict';

  // You can include npm dependencies for support files in tests/cucumber/package.json
  var _ = require('underscore');

  module.exports = function () {
    this.Given(/^I am a user$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      this.server.call('reset');
      this.client
      .url(process.env.ROOT_URL)
      .waitForExist('body *')
      .waitForVisible('body *')
      .call(callback);
    });

    this.Given(/^had inputed$/, function (callback) {
      this.client
      .waitForExist('body *')
      .waitForVisible('body *')
      .call(callback);
    });

    this.When(/^input sentence "([^"]*)"$/, function (arg1, callback) {
      this.client
      .setValue('#inputsentence', arg1)
      .call(callback);
    });

    this.When(/^input language from "([^"]*)"$/, function (arg1, callback) {
      this.client
      .selectByVisibleText('#lang_in', arg1)
      .call(callback);
    });

    this.When(/^input language to "([^"]*)"$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      this.client
      .selectByVisibleText('#lang_out', arg1)
      .call(callback);
    });

    this.When(/^submit sentence$/, function (callback) {
      this.client
      .submitForm('.sentences-for-translate')
      .call(callback);
    });


    this.Then(/^I see the request "([^"]*)" "([^"]*)" "([^"]*)"$/, function (arg1, arg2, arg3, callback) {
      this.client
      .waitForExist('#sentence',100)
      .getText('#sentence').then (function (text) {
        if( typeof text === 'string' ) {
          text = [ text ];
        }
        console.log(text);
        assert.equal(text[0],arg1);
      })
      .getText('#lang').then (function (lang) {
        if( typeof lang === 'string' ) {
          lang = [ lang ];
        }
        console.log(lang);
        assert.equal(lang[0],arg2 + ' -> '+ arg3);
      })
      .call(callback);
    });
  }
})();

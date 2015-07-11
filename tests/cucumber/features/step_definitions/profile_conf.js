(function () {

  'use strict';

  // You can include npm dependencies for support files in tests/cucumber/package.json
  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function () {

    this.When(/^Click button "([^"]*)"$/, function (arg1, callback) {
      this.client
      .waitForExist('#'+arg1,100)
      .click('#' +arg1)
      .call(callback);
    });

    this.When(/^Add language to learn "([^"]*)"$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      this.client
      .waitForExist('#userlanguage',100)
      .selectByVisibleText('#select-language', arg1)
      .click('#button-learn-append')
      .call(callback);
    });

    this.When(/^Add Language fluently "([^"]*)"$/, function (arg1, callback) {
      this.client
      .waitForExist('#userlanguage',100)
      .selectByVisibleText('#select-language', arg1)
      .click('#button-fluent-append')
      .call(callback);
    });

    this.Then(/^Check Language to learn is "([^"]*)"$/, function (arg1, callback) {
      this.client
      .getText('#language-to-learn').then (function (text) {
        if( typeof text === 'string' ) {
          text = [ text ];
        }
        console.log(text);
        assert.equal(text[text.length-1],arg1);
      })
      .call(callback);
    });

    this.Then(/^Check Language fluently "([^"]*)"$/, function (arg1, callback) {
      this.client
      .getText('#language-at-fluent').then (function (text) {
        if( typeof text === 'string' ) {
          text = [ text ];
        }
        console.log(text);
        assert.equal(text[text.length-1],arg1);
      })
      .call(callback);
    });
  }
})()

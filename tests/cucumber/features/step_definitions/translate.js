var assert = require('assert');

(function () {

  'use strict';

  // You can include npm dependencies for support files in tests/cucumber/package.json
  module.exports = function () {

    this.When(/^select the the sentence "([^"]*)"$/, function (arg1, callback) {
      this.client
      .click('#sentence')//Try to find element with have text: Try my best
      .call(callback);
    });

    this.When(/^input the translate "([^"]*)"$/, function (arg1, callback) {
      this.client
      .waitForExist('.translate-a-sentence',100)
      .setValue('#translateInput', arg1)
      .call(callback);
    });

    this.When(/^submit translate$/, function (callback) {
      this.client
      .submitForm('.translate-a-sentence')
      .call(callback);
    });

    this.Then(/^I see the response "([^"]*)" "([^"]*)"$/, function (arg1, arg2, callback) {
      this.client
      .waitForExist('#showSentence',100)
      .getText('#showSentence').then (function (text) {
        if( typeof text === 'string' ) {
          text = [ text ];
        }
        console.log(text);
        assert.equal(text[0],"Cố lên");
      })
      .getText('#showTranslate').then (function (text) {
        if( typeof text === 'string' ) {
          text = [ text ];
        }
        console.log(text);
        assert.equal(text[0],'-> '+ arg2);
      })
      .call(callback);
    });

  }
})();

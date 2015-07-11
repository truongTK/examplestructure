(function () {

  'use strict';

  Meteor.methods({
    'reset' : function() {
      Meteor.users.remove({});
    },
    'resetData' : function() {
      Sentences.remove({});
      Translate.remove({});
    }
  });

})();

Meteor.methods({
  addLanguage: function (text) {
    Languages.insert({
      text: text,
      createdAt: new Date()
    });
  },
  removeLanguage: function () {
    Languages.remove({});
  },
  userAppendLanguage: function (languageId) {
    UserLanguages.insert({
      userId:Meteor.userId(),
      languageId:languageId
    });
  }
});

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
  getDefaultLanguage: function () {
    var langId =  Languages.find().fetch()[0]._id;
    return langId;
  },
  userAppendLanguage: function (_languageId, type) {
    UserLanguages.insert({
      userId:Meteor.userId(),
      languageId:_languageId,
      type:type
    });
  },
  showLanguages: function () {
    return Languages.find();
  }
});

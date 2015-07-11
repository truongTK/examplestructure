Meteor.subscribe("userlanguages");

Template.body.helpers({
  isFirstLogin: function () {
    var array_uLang = UserLanguages.find({userId:Meteor.userId()}).fetch();
    if(array_uLang.length == 0 && Meteor.userId())
    {
      return true;
    }
    else {
      return false;
    }
  },

  isLogin: function () {
    if(Meteor.userId())
    {
      return true;
    }
    return false;
  }
});

Template.userlanguages.helpers({
  showLanguages: function () {
    return Languages.find();
  }
});

Template.userlanguages.events({
  appendLanguage: function (languageId) {
    Meteor.call(userAppendLanguage, languageId);
  }
});

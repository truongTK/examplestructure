Meteor.subscribe("userlanguages");
Session.set("languageSelected", null);

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
Template.userlanguages.events({
  appendLanguage: function (languageId, type) {
    Meteor.call(userAppendLanguage, languageId, type);
  },

  "click #button-learn-append": function (event) {
    if(Meteor.userId()){
      if(Session.get("languageSelected") == null){
        Session.set("languageSelected", Languages.find().fetch()[0]._id);
      }
      Meteor.call("userAppendLanguage", Session.get("languageSelected"), "study");
    }

  },

  "click #button-fluent-append": function (event) {
    if(Meteor.userId()){
      if(Session.get("languageSelected") == null){
        Session.set("languageSelected", Languages.find().fetch()[0]._id);
      }
      Meteor.call("userAppendLanguage", Session.get("languageSelected"), "fluent");
    }
  }
});
Template.userlanguages.helpers({
  showStudyProfile: function () {
    var arrLanguageId = []
    var study_languages =  UserLanguages.find({"userId":Meteor.userId(), "type":"study"}).fetch();
    for (var i = 0; i < study_languages.length; i++) {
      arrLanguageId.push(study_languages[i].languageId);
    }
    var arrLang = Languages.find({"_id":{ $in : arrLanguageId }});
    return arrLang;
  },
  showFluentProfile: function () {
    var arrLanguageId = []
    var study_languages =  UserLanguages.find({"userId":Meteor.userId(), "type":"fluent"}).fetch();
    for (var i = 0; i < study_languages.length; i++) {
      arrLanguageId.push(study_languages[i].languageId);
    }
    var arrLang = Languages.find({"_id":{ $in : arrLanguageId }});
    return arrLang;
  }
});

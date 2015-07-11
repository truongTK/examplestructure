Template.profileButton.events({
  "click #profile-button": function (event) {
    if(Session.get("profileClicked") == true){
      Session.set("profileClicked", false);
    }else{
      Session.set("profileClicked", true);
    }
  }
});

Template.body.helpers({
  showProfile: function () {
    if(Session.get("profileClicked") == true){
      return true;
    }
    return false;
  }
});

Template.analytics.helpers({
  userCount: function () {
    var arrUsers = Meteor.users.find().fetch();
    return arrUsers.length;
  },
  sentenceCount: function () {
    var arrSentences = Sentences.find().fetch();
    return arrSentences.length;
  },
  translateCount: function () {
    var arrTranslate = Translate.find().fetch();
    return arrTranslate.length;
  }
});

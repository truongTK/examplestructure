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

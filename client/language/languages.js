Meteor.subscribe("languages");

Template.languages.helpers({
  insertLanguage: function(text){
    Languages.insert({
      text: text,
      createdAt: new Date(),
    });
  },
  deleteLanguage: function (languageId) {
    Languages.remove(languageId);
  }
});

Template.body.helpers({
  showLanguages: function () {
    return Languages.find();
  }
});
Template.body.events({
  "submit .master-language": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    Meteor.call("addLanguage", text);
    event.target.text.value = "";
  },
  "click .clear": function (event) {
  Meteor.call("removeLanguage");
  }
});

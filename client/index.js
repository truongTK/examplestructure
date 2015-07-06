// This code only runs on the client
Meteor.subscribe("sentences");

Template.body.helpers({
  Sentences: function () {
      return Sentences.find({}, {sort: {createdAt: -1}});
  }
});

Template.body.events({
  "submit .sentences-for-translate": function (event) {
    // This function is called when the new task form is submitted
    var text = event.target.text.value;
    Meteor.call("addSentences", text);
    // Clear form
    event.target.text.value = "";
    // Prevent default form submit
    return false;
  }
});

Template.sentences.events({
  "click .delete": function () {
    Meteor.call("deleteSentences", this._id);
  }
});

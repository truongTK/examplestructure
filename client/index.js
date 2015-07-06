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
    var lang_in = event.target.lang_in.value;
    var lang_out = event.target.lang_out.value;
    Meteor.call("addSentences", text, lang_in,lang_out);
    // Clear form
    event.target.text.value = "";
    // Prevent default form submit
    return false;
  }
});

Template.sentences.helpers({
  isSelected: function() {
    return Session.get("sentenceSelected") === this._id;
  }
});

Template.sentences.events({
  "click .delete": function () {
    Meteor.call("deleteSentences", this._id);
  },
  "click li": function () {
    Session.set("sentenceSelected",this._id);
  }
});

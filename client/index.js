// This code only runs on the client
Meteor.subscribe("sentences");
Meteor.subscribe("translate");

Template.body.helpers({
  Sentences: function () {
    return Sentences.find({}, {sort: {createdAt: -1}});
  },
  Translate: function () {
    return Translate.find({}, {sort: {createdAt: -1}});
  },
  isTranslate: function () {
    if (Session.get("sentenceSelected")===undefined) return false;
    return true;
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
  },
  "submit .translate-a-sentence": function (event) {
    var text = event.target.text.value;
    Meteor.call("addTranslate",Session.get("sentenceSelected"),text);
    event.target.text.value = "";
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

Template.translate_sentence.helpers({
  translateSentence: function () {
    return Sentences.find({_id: Session.get("sentenceSelected")}).fetch()[0].text;
  }
});

Template.show_translate.helpers({
  showSentence: function () {
    return Sentences.find({_id: this.sentenceid}).fetch()[0].text;
  }
});

Meteor.methods({
  addSentences: function (text) {
    Sentences.insert({
      text: text,
      createdAt: new Date()
    });
  },
  deleteSentences: function (sentenceid) {
    Sentences.remove(sentenceid);
  }
});

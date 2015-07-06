Meteor.methods({
  addSentences: function (text,lang_in,lang_out) {
    Sentences.insert({
      text: text,
      lang_in: lang_in,
      lang_out: lang_out,
      createdAt: new Date()
    });
  },
  deleteSentences: function (sentenceid) {
    Sentences.remove(sentenceid);
  }
});

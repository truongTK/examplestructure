//Server publish
Meteor.publish("sentences", function () {
  return Sentences.find({
  });
});

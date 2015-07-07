//Server publish
Meteor.publish("sentences", function () {
  return Sentences.find({
  });
});

Meteor.publish("translate", function () {
  return Translate.find({
  });
});

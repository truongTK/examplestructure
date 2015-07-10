//Server publish
Meteor.publish("sentences", function () {
  return Sentences.find({
  });
});

Meteor.publish("translate", function () {
  return Translate.find({
  });
});

Meteor.publish("languages", function () {
  return Languages.find({
  });
});

Meteor.publish("userlanguages", function () {
  return UserLanguages.find({
  });
});

if (Meteor.isClient) {
  // counter starts at 0
  Template.body.helpers({
	tasks:[
	{text: "this is task 1"},
	{text: "this is task 2"},
	{text: "this is task 3"}
	]
	});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Meteor.methods({
  drupalCreateNewUserByEmail: function (email, subscribed_to_mailing_list) {
    var return_obj = {};

    // first let's see if it's a validly formatted email address
    if (validateEmail(email) == false) {
      return_obj.reason = "Whoops! It appears that you've entered an invalid email address.";
      throw new Meteor.Error(-1, return_obj.reason);
    }

    // validate profile info
    if (typeof(subscribed_to_mailing_list) != "boolean") {
      return_obj.reason = "Whoops! Subscribed must be true or false.";
      throw new Meteor.Error(-1, return_obj.reason);
    }

    // create user
    profile = {};

    profile.subscribed_to_mailing_list = subscribed_to_mailing_list;

    var uid = Accounts.createUser({email: email, profile: profile});
    Accounts.sendEnrollmentEmail(uid);

    return_obj.confirmation = "Success! Please check your email for further instructions.";

    return return_obj;
  }
});

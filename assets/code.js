$(document).ready(function() {
	$('#SubscriptionComplete').hide();
})

function submit() {
	var Emails = Parse.Object.extend("Emails");
	var inputEmail = new Emails();

	var userInput = $('#emailInput').val();

	if (userInput == null || userInput == "" || userInput == "email address") {
		
	} else {
		$('#SubscriptionComplete').show();
		$('#SubscriptionBox').hide();
		inputEmail.save({address: userInput})
	}

	// inputEmail.save({address: ""})
}
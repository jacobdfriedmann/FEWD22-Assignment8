$(document).ready(function() {

	$('#registrationForm').submit(processForm);

	function processForm(event) {
		event.preventDefault();

		var username = $('input[name="username"]').val();
		var password = $('input[name="password"]').val();
		var emailAddress = $('input[name="emailAddress"]').val();

		if (username === '') {
			$('#errorMessage')
				.html('Please enter a username')
				.removeClass('hide');
		}
			if (password === '') {
			$('#errorMessage2')
				.html('Please enter a password')
				.removeClass('hide');
		}
			if (emailAddress === '') {
			$('#errorMessage3')
			.html('Please enter an email')
			.removeClass('hide');
		}

	}

});
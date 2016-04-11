$(document).ready(function() {

	$('#registrationForm').submit(processForm);

	function processForm(event) {
		event.preventDefault();

		var username = $('input [name="username"]').val();
		var password = $('input [name="password"]').val();
		var email = $('input [name="emailAddress"]').val();
		var hearAboutUs = $('select [name="hear-about-us"]').val();
	
		if (username === '') {
			$('#errorMessage')
				.removeClass('hide');
				.html('You did it wrong')
		}

	}

});
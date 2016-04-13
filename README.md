#FEWD Week #8: Forms

---

###Description 

This week, you'll be practicing your form skills: you have the option of adding a form to your final project, finishing the Relaxr form that will be started in class, or building a form for CitiPix. The form you build must include at least three different types of HTML form elements and some light CSS styling. We have given you an example of a form that renders well on the web and mobile devices, as well as an example, with starter code, of a registration form you could build for Relaxr.

---


###Real-World Applications

- Be able to apply the proper HTML and CSS styles to create a modern web form
- Revisit applications and projects to iterate on code you've written 

---


###Technical Requirements 

- Use at least three different types of HTML5 form elements: ```input```, ```textarea```, ```select```, ```radio``` ```button```, ```dropdown```, ```checkbox```
- Link to your sign-up page from different pages in your application 
- Style forms lightly using CSS
- Make sure a user's password is not visible when they are entering it

####Bonus

- Use responsive media queries to allow for proper rendering on mobile devices 
- Use jQuery and display an error message if any of the input fields are left blank upon submission 
- To replicate application flow, add another page that says "Thanks for Relaxing with us!" after submission

---

###Resources

- [W3Schools: Form Elements](http://www.w3schools.com/html/html_form_elements.asp)
- [W3Schools: Input Types](http://www.w3schools.com/html/html_form_input_types.asp)
- [MDN: Styling HTML Forms](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Styling_HTML_forms)
- [Webdesign.com: Form Validation with CSS3/HTML5](http://webdesign.tutsplus.com/tutorials/bring-your-forms-up-to-date-with-css3-and-html5-validation--webdesign-4738)
- [CSS-Tricks.com: Tips for Creating Great Web Forms](http://css-tricks.com/tips-for-creating-great-web-forms/)
- [jQuery API Docs: .val( ) function](http://api.jquery.com/val/)

---

###Evaluation

Instructional team should evaluate against the solution code and the student's fulfillment of technical requirements. Instructional team will provide a numeric grade on a scale for each technical requirement: does not meet expectations (0); meets expectations (1); exceeds expectations (2). **Note**: If bullet points have child bullets, grade the child bullets and not the parent bullet belonging to the child. The maximum possible score on this assignment is 8/8. Bonus materials are completely optional.

---

###Submission

1. "Fork" this repository
2. "Clone" your fork into the GitHub Desktop app
3. Complete the assignment
4. Commit changes and push them back to GitHub (sync)
5. Submit a "pull request" to the "upstream" project


<div class="container">
			<h2>Register For Planetarium</h2>
			<div id="errorMessage" class="error hide"></div>
			<form id="registrationForm">
				<label for="username">Username</label>
				<input type="text" name="username" placeholder="Username">

				<label for="password">Password</label>
				<input type="password" name="password" placeholder="Password">

				<input type="email" name="emailAddress" placeholder="Email">

				<p>Do you love space?</p>
				<label>
					Yes
					<input type="radio" name="lovesSpace" value="yes">
				</label>
				<label>
					No
				<input type="radio" name="lovesSpace" value="no">
				</label>

				<input type="checkbox" name="astronauts" value="Gagarin">
				<input type="checkbox" name="astronauts" value="Armstrong">
				<input type="checkbox" name="astronauts" value="Aldrin">
				<input type="checkbox" name="astronauts" value="Kelly">
				<input type="checkbox" name="astronauts" value="Ride">

				<select name="planet">
					<option value=''></option>
					
				</select>

				<input type="submit" value="Register for Planetarium!">
			</form>
			<div id="successMessage" class="success hide"></div>
		</div>
































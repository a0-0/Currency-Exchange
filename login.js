function login() {
	// Get input values
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Check if username and password are correct
	if (username === "admin" && password === "password") {
		// Redirect to admin page
		window.location.href = "admin.html";
	} else {
		// Display error message
		document.getElementById("message").innerHTML = "Invalid username or password";
	}
}

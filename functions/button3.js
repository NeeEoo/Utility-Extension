function button3() {
	if (document.getElementById("button3").innerHTML == "Show Passwords") {
		//Button On
		document.getElementById("button3").innerHTML = "Hide Passwords";
		//Find All Passwords or type="password" and change to type="pssword" 
		//Add code here
	} else {
		//Button Off
		document.getElementById("button3").innerHTML = "Show Passwords";
		//Find All Passwords or type="pssword" and change to type="password"
		//Add code here
	}
}
document.addEventListener('DOMContentLoaded', function() {
	var ShowPass = document.getElementById('button3');
	// onClick's logic below:
	ShowPass.addEventListener('click', function() {
		button3();
	});
});
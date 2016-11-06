function button1() {
	if (document.getElementById("button1").innerHTML == "Enable SpellCheck") {
		document.getElementById("button1").innerHTML = "Disable SpellCheck";
		//Add code here
	} else {
		document.getElementById("button1").innerHTML = "Enable SpellCheck";
		//Add code here
	}
}
document.addEventListener('DOMContentLoaded', function() {
	var SpellCheck = document.getElementById('button1');
	// onClick's logic below:
	SpellCheck.addEventListener('click', function() {
		button1();
	});
});
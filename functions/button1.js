function button1() {
	if (document.getElementById("button1").innerHTML == "Enable SpellCheck") {
		//Button On
		document.getElementById("button1").innerHTML = "Disable SpellCheck";
		//Find spellcheck="false" in current site and change it to spellcheck="true"
		//Add code here
	} else {
		//Button Off
		document.getElementById("button1").innerHTML = "Enable SpellCheck";
		//Find spellcheck="true" in current site and change it to spellcheck="false"
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
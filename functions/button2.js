function button2() {
	if (document.getElementById("button2").innerHTML == "Enable Button Toggle") {
		document.getElementById("button2").innerHTML = "Disable Button Toggle";
		document.getElementById("btnID").disabled = false;
		//Works But need to edit the current page not the extension page (popup.html)
	} else {
		document.getElementById("button2").innerHTML = "Enable Button Toggle";
		document.getElementById("btnID").disabled = true;
	}
}
document.addEventListener('DOMContentLoaded', function() {
	var ButtonToggle = document.getElementById('button2');
	// onClick's logic below:
	ButtonToggle.addEventListener('click', function() {
		button2();
	});
});
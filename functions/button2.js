function button2() {
	if (document.getElementById("button2").innerHTML == "Enable Button Toggle") {
		document.getElementById("button2").innerHTML = "Disable Button Toggle";
	} else {
		document.getElementById("button2").innerHTML = "Enable Button Toggle";
	}
}
document.addEventListener('DOMContentLoaded', function() {
	var ButtonToggle = document.getElementById('button2');
	// onClick's logic below:
	ButtonToggle.addEventListener('click', function() {
		button2();
	});
});
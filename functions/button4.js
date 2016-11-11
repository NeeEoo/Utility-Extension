function button4() {
	if (document.getElementById("button4").innerHTML == "Enable") {
		//Button On
		document.getElementById("button4").innerHTML = "Disable";
		//Add code here
	} else {
		//Button Off
		document.getElementById("button4").innerHTML = "Enable";
		//Add code here
	}
}
document.addEventListener('DOMContentLoaded', function() {
	var Var2 = document.getElementById('button4');
	// onClick's logic below:
	Var2.addEventListener('click', function() {
		button4();
	});
});
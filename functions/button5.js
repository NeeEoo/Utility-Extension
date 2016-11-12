function button5() {
	if (document.getElementById("button5").innerHTML == "Enable") {
		//Button On
		document.getElementById("button5").innerHTML = "Disable";
		//Add code here
	} else {
		//Button Off
		document.getElementById("button5").innerHTML = "Enable";
		//Add code here
	}
}
document.addEventListener('DOMContentLoaded', function() {
	var Var2 = document.getElementById('button5');
	// onClick's logic below:
	Var2.addEventListener('click', function() {
		button5();
	});
});
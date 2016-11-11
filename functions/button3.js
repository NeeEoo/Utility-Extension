function button3() {
	if (document.getElementById("button3").innerHTML == "Enable") {
		//Button On
		document.getElementById("button3").innerHTML = "Disable";
		//Add code here
	} else {
		//Button Off
		document.getElementById("button3").innerHTML = "Enable";
		//Add code here
	}
}
document.addEventListener('DOMContentLoaded', function() {
	var Var1 = document.getElementById('button3');
	// onClick's logic below:
	Var1.addEventListener('click', function() {
		button3();
	});
});
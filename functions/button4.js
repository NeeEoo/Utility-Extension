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
	var Var1 = document.getElementById('button4');
	// onClick's logic below:
	Var1.addEventListener('click', function() {
		button4();
	});
});
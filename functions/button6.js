function button6() {
	if (document.getElementById("button6").innerHTML == "Enable") {
		//Button On
		document.getElementById("button6").innerHTML = "Disable";
		//Add code here
	} else {
		//Button Off
		document.getElementById("button6").innerHTML = "Enable";
		//Add code here
	}
}
document.addEventListener('DOMContentLoaded', function() {
	var Var3 = document.getElementById('button6');
	// onClick's logic below:
	Var3.addEventListener('click', function() {
		button6();
	});
});
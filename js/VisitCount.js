if (localStorage.VisitCount) {
	localStorage.VisitCount = Number(localStorage.VisitCount) + 1;
} else {
	localStorage.VisitCount = 1;
}
document.write("<p>You have gone into this Extension " + localStorage.VisitCount + " time(s).</p>");

function ResetVisit() {
	if (document.getElementById("ResetVisit").innerHTML == "Click Me to Reset Value") {
		//Button On
		document.getElementById("ResetVisit").innerHTML = "Value Reseted";
		window.localStorage.clear("VisitCount");
	} else {
		//Button Off
		document.getElementById("ResetVisit").innerHTML = "Click Me to Reset Value";
	}
}
document.addEventListener('DOMContentLoaded', function() {
	var VisitReset = document.getElementById('ResetVisit');
	// onClick's logic below:
	VisitReset.addEventListener('click', function() {
		ResetVisit();
	});
});
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-86898465-1']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
	//document.getElementById("button1").innerHTML = localStorage.getItem("");
})();
// $("#optionsButton").unbind().click(function() {
	// chrome.tabs.getAllInWindow(null, function tabSearch(tabs) {
		// var urlToOpen = chrome.extension.getURL('options_pages/options_page.html');
		// var urlToOpen = chrome.extension.getURL('options_main_page.html');
		// for (var i = 0; i < tabs.length; i++) {
			// var tab = tabs[i];
			// if (tab.url.indexOf(urlToOpen) == 0) {
				// chrome.tabs.update(tab.id, {
					// selected: true
				// });
				// return;
			// }
		// }
		// chrome.tabs.create({
			// url: urlToOpen //+"?page=user_preferences"
		// });
	// });
// });
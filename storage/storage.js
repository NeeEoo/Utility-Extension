var Utility-Extension = Utility-Extension || {}; // eslint-disable-line no-use-before-define
Utility-Extension.Storage = Utility-Extension.Storage || {};
Utility-Extension.Storage.storageId = "utility-extension";
var Utility-Extension = Utility-Extension || {}; // eslint-disable-line no-use-before-define
Utility-Extension.Storage = Utility-Extension.Storage || {};
// Clears the features on a tab
Utility-Extension.Storage.clearTabFeatures = function(featureTabId) {
	window.localStorage.removeItem(featureTabId);
	Utility-Extension.Storage.updateBadgeText(featureTabId);
};
// Returns the list of features on a tab
Utility-Extension.Storage.getFeaturesOnTab = function(tabId) {
	var featuresOnTab = window.localStorage.getItem(tabId);
	// If there are features on the tab
	if (featuresOnTab) {
		return featuresOnTab.split(",");
	}
	return null;
};
// Returns an item
Utility-Extension.Storage.getItem = function(item) {
	return window.localStorage.getItem(item);
};
// Returns true if a feature is on a tab
Utility-Extension.Storage.isFeatureOnTab = function(feature, tab) {
	var tabId = tab.id;
	var featuresOnTab = window.localStorage.getItem(tabId);
	// If there are features on the tab
	if (featuresOnTab) {
		var featuresOnTabArray = featuresOnTab.split(",");
		// Loop through the features on the tab
		for (var i = 0, l = featuresOnTabArray.length; i < l; i++) {
			// If the feature is on the tab
			if (featuresOnTabArray[i] == feature) {
				return true;
			}
		}
	}
	return false;
};
// Removes an item
Utility-Extension.Storage.removeItem = function(item) {
	window.localStorage.removeItem(item);
};
// Sets an item
Utility-Extension.Storage.setItem = function(item, value) {
	window.localStorage.setItem(item, value);
};
// Sets an item if it is not already set
Utility-Extension.Storage.setItemIfNotSet = function(item, value) {
	// If the item is not already set
	if (!Utility-Extension.Storage.getItem(item)) {
		window.localStorage.setItem(item, value);
	}
};
// Handles a tab selection changing
Utility-Extension.Storage.tabSelectionChanged = function(tabId) {
	Utility-Extension.Storage.updateBadgeText(tabId);
};
// Handles a tab updating
Utility-Extension.Storage.tabUpdated = function(tabId, properties) {
	// If there are no properties or the status is loading
	if (!properties || properties.status == "loading") {
		Utility-Extension.Storage.clearTabFeatures(tabId);
	}
};
// Toggles a feature on a tab
Utility-Extension.Storage.toggleFeatureOnTab = function(feature, tab) {
	var featureTabId = tab.id;
	var currentFeaturesOnTab = window.localStorage.getItem(featureTabId);
	var newFeaturesOnTab = null;
	// If there are features on the tab
	if (currentFeaturesOnTab) {
		var featureOnTab = false;
		newFeaturesOnTab = currentFeaturesOnTab.split(",");
		// Loop through the features on the tab
		for (var i = 0, l = newFeaturesOnTab.length; i < l; i++) {
			// If the feature is on the tab
			if (newFeaturesOnTab[i] == feature) {
				featureOnTab = true;
				newFeaturesOnTab.splice(i, 1);
			}
		}
		// If the feature is on the tab
		if (featureOnTab) {
			newFeaturesOnTab = newFeaturesOnTab.join(",");
		} else {
			newFeaturesOnTab = currentFeaturesOnTab + feature + ",";
		}
	} else {
		newFeaturesOnTab = feature + ",";
	}
	window.localStorage.setItem(featureTabId, newFeaturesOnTab);
	Utility-Extension.Storage.updateBadgeText(featureTabId);
};
// Updates the badge text for a tab
Utility-Extension.Storage.updateBadgeText = function(featureTabId) {
	var badgeText = "";
	var badgeTooltip = "Utility-Extension";
	var featuresOnTab = Utility-Extension.Storage.getFeaturesOnTab(featureTabId);
	// If there are features on the tab
	if (featuresOnTab) {
		var featureCount = featuresOnTab.length - 1;
		var featureDescription = "features";
		// If there is only one feature count
		if (featureCount == 1) {
			featureDescription = "feature";
		}
		badgeText = featureCount.toString();
		badgeTooltip += "\n" + badgeText + " active " + featureDescription + " on this tab";
	}
	chrome.browserAction.setBadgeText({
		text: badgeText,
		tabId: featureTabId
	});
	chrome.browserAction.setTitle({
		title: badgeTooltip,
		tabId: featureTabId
	});
};
// Updates the extension icon
Utility-Extension.Storage.updateIcon = function() {
	var icon = {
		path: {
			19: "/overlay/images/icon.png",
			38: "/overlay/images/icon-2x.png"
		}
	};
	// If the icon should be in color
	if (Utility-Extension.Storage.getItem("icon_color") == "true") {
		icon = {
			path: {
				19: "/overlay/images/icon-color.png",
				38: "/overlay/images/icon-color-2x.png"
			}
		};
	}
	chrome.browserAction.setIcon(icon);
};
Utility-Extension.Storage.updateIcon();
chrome.tabs.onRemoved.addListener(Utility-Extension.Storage.tabUpdated);
chrome.tabs.onSelectionChanged.addListener(Utility-Extension.Storage.tabSelectionChanged);
chrome.tabs.onUpdated.addListener(Utility-Extension.Storage.tabUpdated);
chrome.browserAction.setBadgeBackgroundColor({
	color: [0, 200, 0, 255]
});
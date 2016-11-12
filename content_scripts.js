function getword(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  console.log("info: " + info);
  console.log("tab: " + tab);
  //info.innerHTML = "OMg";
  document.getElementById("taw").innerHTML = "Paragraph changed!";
  //chrome.tabs.create({  
    //url: "http://www.google.com/search?q=" + info.selectionText,
  //}); 
}
chrome.contextMenus.create({
  title: "Search: %s", 
  contexts:["selection"], 
  onclick: getword,
});
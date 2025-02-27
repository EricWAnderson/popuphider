// When page loads remove popup
chrome.extension.sendMessage({}, function(response) {
	// Run popup removal when page has completed
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			
			STPopupRemover.remove();
		}
	}, 10);
});

var STPopupRemover = (function() {
  var remove = function() {
    // Remove popup
		document.querySelector(".ReactModalPortal").remove(); 

		// Make page scrollable, in case CSS doesn't override
		document.querySelector(".ReactModal__Body--open").style.position = 'relative';
	}
	
  // Exposed functions
  return {
    remove: remove
  };
})();
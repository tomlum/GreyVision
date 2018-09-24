console.log("~Activating Grey Vision~")

new MutationObserver(function(mutations, observer) {
	document.querySelectorAll(".view-count, .short-view-count, .yt-simple-endpoint.style-scope.yt-formatted-string, #top-level-buttons yt-formatted-string[id='text'], ytd-sentiment-bar-renderer, ytd-badge-supported-renderer, ytd-subscribe-button-renderer span, ytd-comments-header-renderer, count-text, #vote-count-middle, #metadata-line .style-scope").forEach(function(a) {
		a.remove()
	})
}).observe(document, {
	childList: true,
	subtree: true
});

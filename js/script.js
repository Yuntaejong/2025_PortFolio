$(function(){
	$(document).ready(function() {
		$('#fullpage').fullpage({
			//options here
			autoScrolling:true,
			scrollHorizontally: true,
			navigation: false,
			scrollingSpeed: 500,
			fitToSection: true,
			lockAnchors: true,
			anchors:['first', 'second', 'third', 'four'],
		});

	});
});
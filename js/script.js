$(function(){
	$(document).ready(function() {
		$('#fullpage').fullpage({
			autoScrolling:true,
			scrollHorizontally: true,
			navigation: false,
			scrollingSpeed: 500,
			fitToSection: true,
			lockAnchors: true,
			anchors: ['section1', 'section2', 'section3', 'section4'],
			onLeave:function(index, nextIndex, direction) {
				if(index == 1 && direction == 'down') {
					$('header').css('display','block');
				} else if (index == 2 && direction == 'up') {
					$('header').css('display','none');
				} 
			}
		});

	});
});
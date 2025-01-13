$(function(){
	$(document).ready(function() {
		$('#fullpage').fullpage({
			autoScrolling:true,
			scrollHorizontally: true,
			navigation: true,
			scrollingSpeed: 500,
			fitToSection: true,
			onLeave:function(index, nextIndex, direction) {
				var $menuItems = $('#menu li');
				$menuItems.removeClass('active');
				$menuItems.filter('[data-menuanchor="section' + nextIndex + '"]').addClass('active');
			}
		});
		
		$.fn.fullpage.setAllowScrolling(false);

		$('.intro button').click(function(){
			$('.intro').fadeOut();
			$('header, #fp-nav').fadeIn();
			$.fn.fullpage.setAllowScrolling(true);
		});
		


	});
});
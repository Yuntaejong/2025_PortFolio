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


				if (index == 3 && direction == 'down') {
					$('.p1').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section4 .work-line').css({
						"height":"400px"
					})
				} else if (index == 4 && direction == 'up') {
					$('.p1').css({
						"width":"0px",
						"height":"0px"
					});
					$('.section4 .work-line').css({
						"height":"0px"
					})
				}

				if (index == 4 && direction == 'down') {
					$('.p1').css({
						"width":"0px",
						"height":"0px"
					});
					$('.section4 .work-line').css({
						"height":"0px"
					})

					$('.p2').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section5 .work-line').css({
						"height":"400px"
					})

				} else if (index == 5 && direction == 'up') {
					$('.p1').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section4 .work-line').css({
						"height":"400px"
					})

					$('.p2').css({
						"width":"0px",
						"height":"0px"
					});
					$('.section5 .work-line').css({
						"height":"0px"
					})
				}

				if (index == 5 && direction == 'down') {
					$('.p2').css({
						"width":"0px",
						"height":"0px"
					});
					$('.section5 .work-line').css({
						"height":"0px"
					})

					$('.p3').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section6 .work-line').css({
						"height":"400px"
					})

				} else if (index == 6 && direction == 'up') {
					$('.p2').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section5 .work-line').css({
						"height":"400px"
					})

					$('.p3').css({
						"width":"0px",
						"height":"0px"
					});
					$('.section6 .work-line').css({
						"height":"0px"
					})
				}

				if (index == 6 && direction == 'down') {
					$('.p3').css({
						"width":"0px",
						"height":"0px"
					});
					$('.section5 .work-line').css({
						"height":"0px"
					})

					$('.p4').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section7 .work-line').css({
						"height":"400px"
					})

				} else if (index == 7 && direction == 'up') {
					$('.p3').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section5 .work-line').css({
						"height":"400px"
					})

					$('.p4').css({
						"width":"0px",
						"height":"0px"
					});
					$('.section7 .work-line').css({
						"height":"0px"
					})
				}

				if (index == 7 && direction == 'down') {
					$('.p4').css({
						"width":"0px",
						"height":"0px"
					});
					$('.section6 .work-line').css({
						"height":"0px"
					})

					$('.p5').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section8 .work-line').css({
						"height":"400px"
					})

				} else if (index == 8 && direction == 'up') {
					$('.p4').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section6 .work-line').css({
						"height":"400px"
					})

					$('.p5').css({
						"width":"0px",
						"height":"0px"
					});
					$('.section8 .work-line').css({
						"height":"0px"
					})
				}

				if (index == 8 && direction == 'down') {
					$('.p5').css({
						"width":"0px",
						"height":"0px"
					});
					$('.section7 .work-line').css({
						"height":"0px"
					})

					$('.p6').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section9 .work-line').css({
						"height":"400px"
					})

				} else if (index == 9 && direction == 'up') {
					$('.p5').css({
						"width":"1500px",
						"height":"1500px"
					});
					$('.section7 .work-line').css({
						"height":"400px"
					})
				}
			}
		});
		
		$.fn.fullpage.setAllowScrolling(false);

		$('.intro button').click(function(){
			$('.intro').fadeOut();
			$('header, #fp-nav').fadeIn();
			$.fn.fullpage.setAllowScrolling(true);
		});
		$('.button button').click(function(){
			$('.button button').removeClass('active');
			$(this).addClass('active');

			let target = $(this).data('target');
			$('.content-wrap .work').hide();
			$('.content-wrap .'+ target).show();
		});

		$('.content-wrap .work').hide();
		$('.content-wrap .work1').show();
	});
});
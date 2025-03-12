$(function(){
	$(document).ready(function() {

		// 모달창
		const modal=`
		<div class="modal">
			<div class="inner">
				<div>
					<img src="./images/popup.jpg" alt="">
				</div>
				<div>
					<input type="checkbox" id="ch">
					<label for="ch">오늘 하루 열지 않음</label>
					<input type="button" value="닫기" id="c_btn">  
				</div>
			</div>
		</div>
		`;
	
		// 모달,로딩 변수를 body의 맨 뒤쪽에 출력한다.
		$('body').append(modal);
	
		//쿠키생성하기
	  let ch = $('.modal #ch');  //체크박스 변수
	
	  //현재 브라우저에 쿠키정보가 있는지 없는지 유무를 판단하여 모달이 나오지 않게함.
		if($.cookie('popup')=='none'){
			$('.modal').hide();
		}
	  //쿠키의 존재 유무를 체크하여 쿠키를 생성하거나 모달윈도 숨기기
		function closeModal(){
			if(ch.is(':checked')){ //만약에 체크박스에 체크가 된 경우라면
	  //쿠키를 생성하기
			$.cookie('popup', 'none', {expires:1, path:'/'});
			}
			//체크박스에 체크 안한 경우 그냥 모달 숨기기
			$('.modal').hide();
		}
	
		//닫기 버튼을 클릭하면 closeModal함수 실행하여 쿠키생성하고 모달 숨기기 한다.
		$('.modal #c_btn').click(function(){
			closeModal();
		});


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
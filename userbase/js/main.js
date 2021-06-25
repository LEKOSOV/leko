$(function(){
	$('#tariffs-btn').click(function(){
		if($('#tariffs-btn').data('clicked')) {
		}
		else {
			$('#tariffs-btn').css('background-color', '#5f3af1');
			$('#tariffs-btn-second').css('background-color', 'transparent');
			$('#tariffs-btn-second').css('border', '2px solid #8c8bb9');
			$('#tariffs-btn-second').css('border-left', 'none');
		}
	});
	$('#tariffs-btn-second').click(function(){
		if($('#tariffs-btn-second').data('clicked')) {
		}
		else {
			$('#tariffs-btn-second').css('background-color', '#5f3af1');
			$('#tariffs-btn-second').css('border', 'none');
			$('#tariffs-btn').css('background-color', 'transparent');
			$('#tariffs-btn').css('border', '2px solid #8c8bb9');
		}
	});
});

function slowScroll(id) {
	var offset = 80;
	$('html,body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 500);
return false;
}

window.onscroll = function showHeader() {
	var header = document.querySelector('.header');
	if (window.pageYOffset > 200) {
		header.classList.add('header_fixed')
	} else {
		header.classList.remove('header_fixed')
	}
}
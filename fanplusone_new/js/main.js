$(function () {
	$('.burger-btn').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('burger-btn_active');
		$('.burger-navs').slideToggle(400).css('display', 'flex');
	})
})
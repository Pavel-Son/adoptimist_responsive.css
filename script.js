$(function() {
	//Main menu dropdown
	$('#masthead > nav').append('<a href="#" id="openMenu">Menu<a>');
	$('#openMenu').on('click', function() {
		$('#masthead > nav > span').slideToggle();
		return false;
	});
	//Considering adoption page dropdown menu
	$('#drop-nav > li').on("click", function () {
		if ($(this).children('ul').length !== 0) {
			$(this).children('a').toggleClass('active-link');
			$(this).children('ul').slideToggle();
		}
		return false;
	});
});

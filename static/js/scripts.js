// TOBE IMPLEMENTED
var mobileMenu = $('#js-navbar-menu'),
	menu = $('.headerMenu'),
	mobileSearch = $('#js-navbar-search'),
	mobileSearchForm = $('.headerSearch'),
	closeSearch = $('.headerSearchClose');

mobileMenu.click(function() { 
	mobileMenu.toggleClass('pressed');
	menu.slideToggle("fast");
});

mobileSearch.click(function() {
	menu.hide(0);
	mobileMenu.removeClass('pressed');
	mobileSearchForm.fadeToggle("fast");
});

closeSearch.click(function() {
	mobileSearchForm.hide();
});

/****
	SONGS LIST
**/

calculateImageMargin();

function calculateImageMargin() {
	$('.songHeaderAvatar img').each(function(){
	    var panelLeft = $('.songHeader').width();
	    var marginA = -(panelLeft / 3.2);
	    
		$(this).css({
			'margin-top': marginA
		});
		// console.log("" + windowH);
	    // console.log("" + marginA);
	});
}

function calculateBoxHeight() {

}

$(window).resize(function() {
	calculateImageMargin();
});


/*
songImage.each(function() {
	var iHeight = $(this).height();
	var move = - (iHeight / 2);

	$(this).css({
		'margin-top': move
	});
});
*/

$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	// mobile menu
	var $menu = $("#my-menu").mmenu({
   //   options
 	});
	var $icon = $("#my-icon");
	var API = $menu.data( "mmenu" );

	$icon.on( "click", function() {
		API.open();
	});

	API.bind( "opened", function() {
		setTimeout(function() {
			$icon.addClass( "is-active" );
		}, 100);
	});
	API.bind( "closed", function() {
		setTimeout(function() {
			$icon.removeClass( "is-active" );
		}, 100);
	});


	// fuul view block
	function showElem(valueAttr) {
		var name = $(valueAttr).attr('name');
		var display = $(name).css('display');

		if (display == 'none')
			$(name).css("display", "inline-block");
		 else 
			$(name).css("display", "none");
	};

	$('.show-work').click(function(){
		showElem('.show-work');
	});

	$('.show-blog').click(function(){
		showElem('.show-blog');
	});


  // scroll
	$('a[href^="#"]').click(function () {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

/* global $ , jquery , alert*/
$(document).ready(function () {
	// nice scroll

	$("html").niceScroll();

	$('.carousel').carousel( {

		interval:4000
	});
	// show color option
	$(".gear-check").click(function () {
		 $(".color-option").fadeToggle();
	});
	// change Theme Color Click

		var col = $(".color-option ul li") ,  scr = $("#scroll-top");

	col
	.eq(0).css("backgroundColor", "#E41B17").end()
	.eq(1).css("backgroundColor", "#746BC7").end()
	.eq(2).css("backgroundColor", "#E426D5").end()
	.eq(3).css("backgroundColor", "#C7C46B");

	col.click(function (){
		//console.log($(this).attr("data-value"))
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));
	});
	
	$(window).scroll(function () {

		
		$(this).scrollTop() >= 700 ? scr.show() : scr.hide();
	
	});
		
		scr.click(function (){
			$("html,body").animate({scrollTop : 0} , 600);
		});

});

// loading screen
$(window).load(function () {
	$("body").css("overflow", "auto");
	$(".over , over.spinner").fadeOut(1000 , 
		function () {
			
					$(this).remove();
					
		});
});
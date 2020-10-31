$(window).load(function(){
	setInterval(function(){startSlide()}, 3500);
});

function startSlide() {
    var $current = $('div #slider img.active');
    var $next = $current.next();        

    if($next.length == 0) {
        $next = $('#slider :first-child');
    }
	$current.removeClass('active');
    $current.css({
        "opacity" : "0.0",
        //"zIndex" : "2"
	});
    $next.animate({opacity: 1.0}, 2000, function() {
		$next.addClass('active').css({zIndex: 1});
	});
}

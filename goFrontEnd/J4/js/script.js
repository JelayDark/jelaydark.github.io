$(function () {
    var $btn1 = $('.btn1');
    var $btn2 = $('.btn2');
    var $btn3 = $('.btn3');
    var $txt1 = $('.txt1');
    var $txt2 = $('.txt2');
    var $txt3 = $('.txt3');
    var $link = $('a');
    
    
    
    $btn1.on('click', function () {
        $txt1.slideToggle();
        $txt2.slideUp();
        $txt3.slideUp();
        
    });
    
    $btn2.on('click', function () {
        $txt2.slideToggle();
        $txt1.slideUp();
        $txt3.slideUp();
        
    });
    
    $btn3.on('click', function () {
        $txt3.slideToggle();
        $txt1.slideUp();
        $txt2.slideUp();
        
    });
    
    $link.on('click', function () {
            var $firstPart = $('.wrapper');
            var $secondPart = $('form');
            $(this).text($firstPart.is(':visible') ? "Go to Text ❯" : "Go to Form ❯");
            $firstPart.slideToggle(1000);
            $secondPart.slideToggle(1000);
    })
        
//PART #2 FORM
    
    var $input = $('.field');
    var $btn = $('.btn-help');
	var $field = $('.form-control');
	
	var $span = document.createElement("span");
	$input.append($span);
	$span = $('span');
	$span.css({
		position: 'absolute',     
		display: 'none',    
		width: 200,
		height: "auto",
		background: 'yellow',
		left: 330,     
		top: 0,     
		boxShadow: '0 0 2px #000',
	});

	
    
    
    
    $field.on('mouseenter', function () {
		$span = $(this).siblings($span);
		$span.stop();
		
		$span.text($(this).attr("title"));
		$(this).removeAttr('title');
		$span.fadeIn();
    });
    
    $field.on('mouseleave', function () {
		$(this).siblings($span).stop();
		$(this).siblings($span).css ({
			display: 'none',
		})
    });
    
    $btn.on('click', function (e) {
        e.preventDefault();
        var $span = $('span');
		$span.stop();
		$span.each(function() {$(this).text($(this).siblings($field).attr("title"))});
        $span.fadeIn().delay(4000).fadeOut();
    });
})
$(function () {
    var $btn1 = $('.btn1');
    var $btn2 = $('.btn2');
    var $btn3 = $('.btn3');
    var $txt1 = $('.txt1');
    var $txt2 = $('.txt2');
    var $txt3 = $('.txt3');
    var $link = $('a');
    
    console.log('butt1 - ', $btn1, 'butt2 - ', $btn2, 'butt3 - ', $btn3);
    
    $btn1.on('click', function () {
        $txt1.slideToggle();
        $txt2.slideUp();
        $txt3.slideUp();
        console.log('TXT1 - ', $txt1);
    });
    
    $btn2.on('click', function () {
        $txt2.slideToggle();
        $txt1.slideUp();
        $txt3.slideUp();
        console.log('TXT2 - ', $txt2);
    });
    
    $btn3.on('click', function () {
        $txt3.slideToggle();
        $txt1.slideUp();
        $txt2.slideUp();
        console.log('TXT3 - ', $txt3);
    });
    
    $link.on('click', function () {
            var $firstPart = $('.wrapper');
            var $secondPart = $('form');
            $(this).text($firstPart.is(':visible') ? "Go to Text ❯" : "Go to Form ❯");
            $firstPart.slideToggle(4000);
            $secondPart.slideToggle(4000);
    })
        
//PART #2 FORM
    
    var $input = $('.field');
    var $btn = $('.btn-help');
    
    console.log('$input - ', $input);
    
    $input.on('mouseenter', function () {
        var $help = $(this).attr('title');
        console.log('$HELP - ', $help);
        
        $('<span>').css({
            position: 'absolute',
            display: 'block',
            left: 100,
            top: 20,
            boxShadow: '0 0 2px #000',
        }).innerHTML($help).insertAfter($input);
        
        
        
//        $help.fadeIn();
    })
    
    $input.on('mouseleave', function () {
        var $help = $(this).siblings('.help');
        $help.fadeOut();
        console.log('$HELP - ', $help);
    })
    
    $btn.on('click', function (e) {
        e.preventDefault();
        var $help = $('.help');
        $help.fadeIn().delay(4000).fadeOut();
    })
})
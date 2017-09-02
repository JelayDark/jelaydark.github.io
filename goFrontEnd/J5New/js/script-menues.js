$(function () {
    $(".with_sub").mouseenter(function () {
        $(".submenu").stop(true).animate({
            opacity: 1,
            top: 45,
            backgroundColor: "#91a0c1",
        }, 600);

    });
    
    $(".li_sub").mouseleave(function () {
        $(".submenu").animate({
            opacity: 0,
            top: 70,
        }, 600)
    })
    
    $(".sub_with_sub").mouseenter(function () {
        $(".submenu_sec").stop(true).animate({
            opacity: 1,
            left: 150,
            backgroundColor: "bisque",
            
        }, 600);
    })
    
    $(".li_sub_sub").mouseleave(function () {
        $(".submenu_sec").animate({
            backgroundColor: "#ff0000",
            opacity: 0,
            left: 500,
        }, 600)
    })
    
})
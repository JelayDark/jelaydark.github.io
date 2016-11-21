$(function () {
    // Инициализация слайдера
    $('.jcarousel').jcarousel({
        // Базовые настройки скрипта пишутся здесь
        wrap: 'both'
    });
    
    // Инициализация прокрутки слайдера
    $('.j_car_prev').jcarouselControl({
        target: '-=1'
    });
    
    $('.j_car_next').jcarouselControl({
        target: '+=1'
    });
    
    // Инициализация пагинации слайдера
    $('.j_car_pag').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
       }
    });
    
    $('.jcarousel').jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });
    
    $('.j_car_pag')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
});
(function($) {
    $.fn.my_car_list = function(options) {
        
        var defaults = {
            width : 500,
//            pixelsOffset: 225,
            el_margin: 25,
            el_width: 200,
        };
        
        $.extend(defaults, options);
        
            $('.car_hider').css('background-color', defaults.backgroundColor).css('width', defaults.width);
            $('.car_el').css('width', defaults.el_width).css('margin-right', defaults.el_margin);
        
        
        
            var leftUIEl = $('.car_control_left'); //кнопка прокрутки влево
            var rightUIEl = $('.car_control_right'); //кнопка прокрутки вправо
            var elementsList = $('.my_car_list'); //список со всеми элементами карусели
  //          var pixelsOffset = defaults.pixelsOffset; //количество пикселей смещения (ширина 1го эл-та + маргин правый)
            var pixelsOffset = defaults.el_width + defaults.el_margin;
            var currentLeftValue = 0; //счетчик, на каком элементе мы находимся в данный момент
            var elementsCount = elementsList.find('li').length; //количество элементов в карусели
            var minimumOffset = - ((elementsCount - 1) * pixelsOffset); // предел смещения влево 'количество элементов - количество отображаемых'
            var maximumOffset = 0; //предел смещения вправо

            leftUIEl.click(function(e) {
                e.preventDefault();
                if (currentLeftValue != maximumOffset) {
                    currentLeftValue += 225;
                    elementsList.animate({ left : currentLeftValue + "px"}, 500);
                }
            });

            rightUIEl.click(function(e) {
                e.preventDefault();
                if (currentLeftValue != minimumOffset) {   
                    currentLeftValue -= 225;
                    elementsList.animate({ left : currentLeftValue + "px"}, 500);
                };
        });
        
        return this;
    }
    
    
    
})(jQuery)
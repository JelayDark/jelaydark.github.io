var a,b;
	
    function foo(c) {
    if (a != c) {b = 0;a = c};
    b ^= 1;
    c.checked = b;};


$(function() {
    var obj = localStorage.getItem('dataQuest');    
    obj = JSON.parse(obj);
    
	$('button').removeAttr('disabled');
    
    var $Var = $('input:radio');
    
    $('button').click(function (en) {
        en.preventDefault();
        try {
			var j = 0;// счетчик правильных ответов. Если равен количеству вопросов - Тест пройден
        	var checkVar = $("input:radio:checked");
        	for (var i = 0; i<obj.length; i++) {
            	var newid = (checkVar[i].getAttribute('id') % 10) + 1;// номер ответа
            	if(newid == obj[i].right) {j++;};
            	checkVar[i].checked = false;
                
        };
        if(j==obj.length) {
			ModalWind(1);
		} else {
			ModalWind(0, j);
		};
		$('.btn-primary').addClass('disabled');
        }
        catch(e) {
			ModalWind('А теперь ответьте на все вопросы');
        }
    });
    
    $Var.click(function() {
        
        var checkVar = $("input:radio:checked");

        console.log('checked : ', checkVar);
        
        if(checkVar.length == obj.length) {
            $('button').removeClass('disabled');
            
        }
		else{
            $('button').addClass('disabled');
			
		}
        
        
        
    });

    //to do: Modal window при клике ок в котором:
 
	function ModalWind(win, fl) {
		var Mod_W = $('#my_Modal');	
		Mod_W.show();
		Mod_W.before("<div class='my_m_overlay'>");
		
		if(win==1) {
			$('.my_m_title').text("3/3 Поздравляю!");
			$('.my_m_body').text("Вы Правильно ответили на все вопросы!");
		} else if(win==0) {
			$('.my_m_title').text(fl + "/3 Увы!");
			$('.my_m_body').text("Вы Где-то ошиблись!");
		} else {
			$('.my_m_title').text("Ой!");
			$('.my_m_body').text(win);			
		}
		
		$('#my_Modal button').click(function(e) {
			e.preventDefault();
			Mod_W.hide();
			$(".my_m_overlay").hide();
			$('.btn-primary').addClass('disabled');
		});
		
		$(".my_m_overlay").click(function(e) {
			e.preventDefault();
			Mod_W.hide();
			$(".my_m_overlay").hide();
			$('.btn-primary').addClass('disabled');
		});
		
		$('button').removeClass('disabled');
		
		
		
	};
	
})
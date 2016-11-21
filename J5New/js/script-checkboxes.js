$(function(){
 
$(".my_chb").each(
/* при загрузке страницы меняем обычные на стильные checkbox */
function() {
      
     changeCheckStart($(this));
      
});
 
                                        });
 
 
function changeCheck(el)
/* 
    функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, который отвечает за новый вид)
    el - span контейнер для обычного чекбокса
    input - чекбокс
*/
{
 
    var el = el,
        input = el.find("input").eq(0);
           
    if(el.attr("class").indexOf("my_chb_dis")==-1)
    {   
        if(!input.attr("checked")) {
            el.addClass("my_chb_checked");
            input.attr("checked", true);
        } else {
            el.removeClass("my_chb_checked");
            input.attr("checked", false).focus();
        }
    }
     
    return true;
}
 
function changeVisualCheck(input)
{
/*
    меняем вид чекбокса при смене значения
*/
var wrapInput = input.parent();
    if(!input.attr("checked")) {
        wrapInput.removeClass("my_chb_checked");
    }
    else
    {
        wrapInput.addClass("my_chb_checked");
    }
}
 
function changeCheckStart(el)
/* 
    новый чекбокс выглядит так <span class="my_chb"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
    новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
*/
{
 
try
{
var el = el,
    checkName = el.attr("name"),
    checkId = el.attr("id"),
    checkChecked = el.attr("checked"),
    checkDisabled = el.attr("disabled"),
    checkTab = el.attr("tabindex"),
    checkValue = el.attr("value");
    if(checkChecked)
        el.after("<span class='my_chb my_chb_checked'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
            "checked='"+checkChecked+"'"+
            "value='"+checkValue+"'"+
            "tabindex='"+checkTab+"' /></span>");
    else
        el.after("<span class='my_chb'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
             "value='"+checkValue+"'"+
            "tabindex='"+checkTab+"' /></span>");
     
    /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */ 
    
    if(checkDisabled)
    {
        el.next().addClass("my_chb_dis");
        el.next().find("input").eq(0).attr("disabled","disabled");
    }
     
    /* цепляем обработчики стилизированным checkbox */     
    el.next().bind("mousedown", function(e) { changeCheck($(this)) });
    el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck($(this)) });
    if($.browser.msie)
    {
        el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck($(this)) });   
    }
    
    
//    $('#chb-1').remove();
//    el.remove();
//    $('.my_chb').remove();
//    
//    el.removeClass("my_chb");
//    el.addClass("deleted");
}
catch(e)
{
    el.remove();
    // если ошибка, ничего не делаем
}
 
    return true;
}
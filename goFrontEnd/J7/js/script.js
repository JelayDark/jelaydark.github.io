$(function() {
    'use strict';
    var answers = {
        q1 : 1997,
        q2 : 'Яичницу',
        q3 : 'Да'
    }
    
    console.log (JSON.stringify(answers));
    
    localStorage.setItem('answer', JSON.stringify(answers));
    
   // Отрисовка теста
    // Questions:
    //
    
    var test_gen = {
    method_1: function() { //Создает Обертку для тела
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        document.body.appendChild(wrapper);
    },
    
    method_2: function(txt_headline) { //Задает право написать текст по центру окна. В любом месте. Просто текст
        var headline = document.createElement('h1');
        headline.style.textAlign = 'center';
        headline.innerHTML=txt_headline;
        var wrapper = document.querySelector('.wrapper');
        wrapper.appendChild(headline);
    },
            
    method_3: function() {//Начинает форму
        var testBody = document.createElement('form');
        testBody.setAttribute('id', 'my_Form')
        var wrapper = document.querySelector('.wrapper');
        wrapper.appendChild(testBody);
        
    },
    /*Для вопросов:
        1.Количество вопросов
        2.Их наименования
        3.Количество ответов в каждом
        4.Наименование ответов
        5.Какой верный
        
        
    */
    
    method_4: function() {//Список для нумерования вопросов 
        var list = document.createElement('ol');
//        list.classList.add('');
        list.setAttribute('id', 'my_List')
        var testBody = document.getElementById('my_Form');
        testBody.appendChild(list);
        
    },
    /*Как делать:
        создать ул с номерацией
        метод для создания вопроса - создание лишника
        метод для создания вариантов ответа: наименование варианта, количество баллов за его выбор (0, если неверно или -сколько-то)
    
    */
    
    method_5: function(txt_quest) {//Создает собственно список вопросов с номерами amount - количество вопросов
//        for(var i=0; i<amount; i++) {}
        var list_item = document.createElement('li');
//        list_item.style.display = 'block';
        list_item.innerHTML = txt_quest;
//        list_item.setAttribute('id', 'my_answer')
        var list = document.getElementById('my_List');
        list.appendChild(list_item);
    },
    
    method_6: function(txt_ansv, name, id) {//Создает вариант ответа
        var div_chbox = document.createElement('div');
        div_chbox.classList.add('radio')
        var var_name = document.createElement('label');
        var chbox = document.createElement('input');
        var_name.classList.add('chb-name');
        chbox.setAttribute('type', 'radio');
        chbox.style.float = 'left';
        chbox.style.margin = '4px 14px 0 0';
        chbox.setAttribute('name', name);
        chbox.setAttribute('id', id);
//        chbox.setAttribute('checked');
        var_name.setAttribute('for', id);
        var_name.innerHTML = txt_ansv;
//        var_name.appendChild(chbox);
        div_chbox.appendChild(chbox);
        div_chbox.appendChild(var_name);
        //А теперь помещаем вариант в список вариантов
        var list_item = document.querySelector('ol');
        console.log ('ffff = ', list_item);
        list_item.appendChild(div_chbox);
    },
    
    method_7: function(txt_btn) {//Создает кнопку. Возможно проверить результаты
        var btn = document.createElement('button');
        btn.setAttribute('type', 'submit');
        btn.classList.add('btn', 'btn-primary', 'disabled');
        btn.style.display = 'block';
        btn.style.margin = '0 auto'; 
        btn.innerHTML = txt_btn;
        var testBody = document.getElementById('my_Form');
        testBody.appendChild(btn);
    }

};

test_gen.method_1();
test_gen.method_2('Тест:');
test_gen.method_3();
test_gen.method_4();
test_gen.method_5('В Каком году я родился?');
    test_gen.method_6('1901', 'q1', 'id1');
    test_gen.method_6('1765', 'q1', 'id2');
    test_gen.method_6('1997', 'q1', 'id3');
test_gen.method_5('Что вы ели на завтрак?');
    test_gen.method_6('Саблю', 'q2', 'id4');
    test_gen.method_6('Яичницу', 'q2', 'id5');
    test_gen.method_6('Солнце', 'q2', 'id6');
test_gen.method_5('Закончим этот тест?');
    test_gen.method_6('Да', 'q3', 'id7');
    test_gen.method_6('Нет', 'q3', 'id8');
    test_gen.method_6('Не знаю', 'q3', 'id9');
test_gen.method_7('Check my answers!');
    
var $q1 = document.getElementsByName('q1');
    console.log ('q1 - ', $q1[0]);
    
    
    
//    if ($q1.prop("checked")) {
//        alert('CHECKED');
//    };
//    
//    function testCheck(name) {
//        if (name.attr('checked') == 'checked') {return true} else
//            return false;
//    }
//    
//    alert( $q1.some(testCheck) );
    
    var $Var = $('input:radio');
    console.log('inputs : ', $Var);
    
    $Var.click(function() {
        
        var checkVar = $("input:radio:checked");

        console.log('checked : ', checkVar);
        
        if(checkVar.length == 3) {
            $('button').removeClass('disabled');
        }
    });
    
    
//    var $whoru = $("input:radio:checked");
    
    
    
    
//    var $wtf = $('input[type=radio]');
//    
//    
//    
//    console.log('radios : ', $wtf);
//    
//    $whoru.attr('checked', 'checked');
//    
//    console.log('checked : ', $whoru);
    
})
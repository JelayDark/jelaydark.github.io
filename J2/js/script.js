//var test = {
//    Headline: function () {
//        
//    }
//    
//    method1: function(question) {
//        var span = document.createElement('span');
//        span.classList.add()
//    }
//}
/*TODO:
    1. В боди - div с классом wrapper
    2. В wrapper - по центру span или label или div или p и т.д. С названием теста и по центру
    3. В wrapper - form 
    4. В form - ul с нумерацией и 3 li
    5. В ul - li *3 с блочным отображением
    6. В li - div с классом checkbox *3
    7. В каждый checkbox - label
    8. В каждый label - input с [type=checkbox]
    9. В wrapper - input с [type=submit]
IF U WANT: 
    10. Под btn - progressbar
*/

// R U READY?!?

// GO!

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
    
    method_6: function(txt_ansv, worth) {//Создает вариант ответа
        var div_chbox = document.createElement('div');
        div_chbox.classList.add('radio')
        var var_name = document.createElement('label');
        var chbox = document.createElement('input');
        chbox.setAttribute('type', 'checkbox');
        chbox.style.float = 'left';
        chbox.style.margin = '4px 14px 0 0';
        chbox.setAttribute('value', worth);
        var_name.innerHTML = txt_ansv;
        var_name.appendChild(chbox);
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
test_gen.method_2('Start please');
test_gen.method_3();
test_gen.method_4();
test_gen.method_5('Quest_1');
    test_gen.method_6('Answ_1', 5);
    test_gen.method_6('Answ_2', 0);
    test_gen.method_6('Answ_3', -4);
test_gen.method_5('Quest_2');
    test_gen.method_6('Answ_1', 5);
    test_gen.method_6('Answ_2', 0);
    test_gen.method_6('Answ_3', -4);
test_gen.method_5('Quest_3');
    test_gen.method_6('Answ_1', 5);
    test_gen.method_6('Answ_2', 0);
    test_gen.method_6('Answ_3', -4);
test_gen.method_7('Check my answers!');

/*
//Че, примерно, надо:

var wrapper = document.createElement('div');
var div = document.createElement('div');
var form = document.createElement('form');
var ul = document.createElement('ul');
var li = document.createElement('li');
var label = document.createElement('label');
var checkbox = document.createElement('input');
var btn = document.createElement('input');
var Progressbar = document.createElement('div');

//Примерные классы:

wrapper.classList.add('wrapper');
form.classList.add();
ul.classList.add();
li.classList.add();
label.classList.add();
checkbox.classList.add();

//Примерный вид:

document.body.appendChild(wrapper);
wrapper.appendChild(div);
wrapper.appendChild(form);
form.appendChild(ul);
ul.appendChild(li);
    li.appendChild(div);
        div.appendChild(label);
            label.appendChild(checkbox);
ul.appendChild(li);
    li.appendChild(div);
        div.appendChild(label);
            label.appendChild(checkbox);
ul.appendChild(li);
    li.appendChild(div);
        div.appendChild(label);
            label.appendChild(checkbox);
wrapper.appendChild(btn);
//IF U WANT
wrapper.appendChild(Progressbar);
*/



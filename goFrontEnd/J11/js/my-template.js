$(function(){

var obj = localStorage.getItem('dataQuest');
    
    
    obj = JSON.parse(obj);
    
    
var test = $('#test_test');

    var doit = $('#test_test').html();
    var doFE = tmpl(doit, obj);

    $('body').append(doFE);
});

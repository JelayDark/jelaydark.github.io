$(function(){

	let obj = localStorage.getItem('dataQuest');
    obj = JSON.parse(obj);

    const doit = $('#test_test').html();
    const doFE = tmpl(doit, obj);

    $('body').append(doFE);
});

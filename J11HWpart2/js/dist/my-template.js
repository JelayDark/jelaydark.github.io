'use strict';

$(function () {

    var obj = localStorage.getItem('dataQuest');
    obj = JSON.parse(obj);

    var doit = $('#test_test').html();
    var doFE = tmpl(doit, obj);

    $('body').append(doFE);
});
//# sourceMappingURL=my-template.js.map

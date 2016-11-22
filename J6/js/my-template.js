$(function(){
    
    var dataObj = {

        name: 'Tulyakov Eugeniy',
        
        who:'Студент курса GoFrontEnd',
        
        photoes:[
            {src:'img/me_1.jpg', title:'Me1'},
            {src:'img/me_2.jpg', title:'Me3'},
            {src:'img/me_3.jpg', title:'Me3'}
        ],
        
        parts:[
            {
                hr_class: 'first_hr', 
                title:'Учу Front-end потому, что', 
                whyObj: [
                    {text: 'Я люблю FE'},
                    {text: 'Мне нравится черный чай'},
                    {text: 'Я веду ночной образ жизни'}
                ],
            },
            {
                hr_class: 'second_hr', 
                title:'Мой контактный телефон', 
                content: '+380954466629'
            },
            {
                hr_class: 'third_hr', 
                title:'Мой профиль Вконтакте', 
                content: '<a href="http://vk.com/skwash">vk.com</a>'
            },
            {
                hr_class: 'fourth_hr', 
                title:'Мой фидбек', 
                content: 'С каждым днем - немного нового'
            }
            
        ]
    };
    
    var html = $('#temp_pro').html();
    var doFE = tmpl(html, dataObj);

    $('.wrapper').append(doFE);
    
    

});

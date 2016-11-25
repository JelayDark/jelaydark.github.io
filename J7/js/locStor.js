var dataQuest = [
    {
        title : "Что обозначает директива ‘use strict'?",
        answers : [
            {txt : 'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.'},
            {txt : 'Код данного скрипта будет обработан по строгим правилам стандарта HTML5.'},
            {txt : 'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.'},
        ],
        check : 1,
    },
    {
        title : "К какому участку скрипта применяется строгие правила ‘use strict’?",
        answers : [
            {txt : "Строгие правила работают между директивами ‘use strict’ и ‘strict end’."},
            {txt : 'Либо во всем скрипте, либо в отдельной функции.'},
            {txt : 'Во всем скрипте'},
        ],
        check : 2,
    },
    {
        title : 'Для чего используется конструкция try-catch в javascript?',
        answers : [
            {txt : 'Для генерирования ошибок.'},
            {txt : 'В строгом режиме весь код необходимо оборачивать в try-catch.'},
            {txt : 'Для обработки возможных ошибок'},
        ],
        check : 3,
    },   
];

console.log (JSON.stringify(dataQuest));
    
localStorage.setItem('dataQuest', JSON.stringify(dataQuest));


var dataQuest = [
    {
        question : 'Мы начали тест?',
        answers : [
            {txt : 'Да'},
            {txt : 'Нет'},
            {txt : 'Не знаю'},
        ],
        right : 1,
    },
    {
        question : 'За сколько милисекунд рэндерится этот тест?',
        answers : [
            {txt : '100мс'},
            {txt : '986мс'},
            {txt : 'Не знаю'},
        ],
        right : 3,
    },
    {
        question : 'Заканчиваем тест?',
        answers : [
            {txt : 'Да'},
            {txt : 'Нет'},
            {txt : 'Не знаю'},
        ],
        right : 1,
    },   
];

console.log (JSON.stringify(dataQuest));
    
localStorage.setItem('dataQuest', JSON.stringify(dataQuest));


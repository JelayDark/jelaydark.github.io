var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var newArr = arr.filter(function(number) {
  return number % 2 === 0;
});  
   
   
   arr.filter(function(number) {
    return
});


//map - трансформация массива

/*var newArr = arr.map(function(element) {
  return element * 2;
});  

console.log(newArr); */


var newNewArr = arr.map(function(element) {
    if (element % 2 === 0) {
        return element*2}
    else {
        return element;}
});

console.log(newNewArr);

// another way:

var newNewArrEn = arr.map(function(element) {
    return element % 2 === 0 ? element * 2 : element;
})

console.log(newNewArrEn);



var arr = [2, 2, 2, 2, 2, 2, 2, 8];

console.log(arr);

var newArr = arr.filter(function(number) {
  return number % 2 === 0;
});

console.log(arr);
console.log(newArr);

if (arr.length == newArr.length) console.log(true)
  else console.log(false);


var status = arr.every(function(element) {
  return element %2 ===0;
});

console.log(status);


var total = arr.reduce(function(sum, current) {
  return sum + current;
})

number.sort {
    
}


//HOisting

//ES 6!! javascript.ru ALL  without 8-9-11-12-14 else learn

//function Expression<-ХОРОШО И ВЫУЧИТЬ КАК func Declaration ПРОЧИТАТЬ!


//Decl:

function name (...) {};

// Самое сложное соб хоистинг:

func();
var func = 21;

func();

function func () {
    console.log(false);
};

func ();

// 1 функ - фолс 2функ - ошибка и 3функ - ош. Ибо функ декларация

// в об дж-с обл видимости только в функ. В ЕС6 - {} создает о.в.

// Больше констов меньше лет SASS - САМОМУ!"!!!!!

// spread rest 

//Срелочные функции

// Развить реакцию


arr.map ((item)=>)
         
         
         //БСорщик
         //Sass goup
         //Шрифты
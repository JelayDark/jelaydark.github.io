function pow(num, exp) {
    var flag = false;
    
    do {
        var num = prompt('Введите число для возведения в степень:', '');
        flag = confirm('Вы ввели число ' +num);
//        num = parseFloat(num);
        num=+num;
//        alert(typeof(num) +', a число - ' +num);
        if (num==='' || num===null) {flag=false; alert('Вы забыли ввести число!! Попробуйте еще раз!');} 
        else if (isNaN(num)) {flag=false; alert('Вводите только числа!! Попробуйте еще раз!');}
    } while(flag==false);
    
    do {
        var exp = prompt('Введите степень, в которую необходимо возвести число:', '');
        flag = confirm('Вы ввели степень ' +exp);
        if (exp==='' || num===null) {flag=false; alert('Вы забыли ввести число!! Попробуйте еще раз!');}
        else if (isNaN(exp)) {flag=false; alert('Вводите только числа!! Попробуйте еще раз!');}
    } while(flag == false);
    
    var result = 1;
    
    for(var i=0;i<exp;i++) {
        result=result*num;
    }
    
    console.log('Result = ', +result);
    
};

function cycle(name1, name2, name3, name4, name5, urname) {
    var flag = true;
    do {
    var name1 = prompt ('Please enter Name 1:', '');
        if (name1 == '' || name1 == null) flag=0
        else flag=true;
    } while(flag==0);
    
    do {
    var name2 = prompt ('Please enter Name 2:', '');
        if (name2 == '' || name2 == null) flag=0
        else flag=true;
    } while(flag==0);
    
    do {
    var name3 = prompt ('Please enter Name 3:', '');
        if (name3 == '' || name3 == null) flag=0
        else flag=true;
    } while(flag==0);
    
    do {
    var name4 = prompt ('Please enter Name 4:', '');
        if (name4 == '' || name4 == null) flag=0
        else flag=true;
    } while(flag==0);
    
    do {
    var name5 = prompt ('Please enter Name 5:', '');
        if (name5 == '' || name5 == null) flag=0;
        else flag=true;
    } while(flag==0);
    
    var names = [name1, name2, name3, name4, name5];
    var str = names.join(' , ');
    alert('Ur Registered Logins: '+str);
    console.log('Ur Registered Logins: '+str);
//    console.log('Logins: ', arguments);
    
    do {
    var urname = prompt ('And now enter UR Name: ', '');
        if (urname == '' || urname == null) {flag=0; alert('No!NO!NO! ENTER ur name!')}
        else flag=true;
    } while(flag==0);
    console.log('Okay dude ur name is '+urname);
    
    for (var name in names) {
        flag=false;
        if (names[name].toUpperCase() == urname.toUpperCase()) { flag=true;break}        
    };
    
    if (flag==true) {alert('Hello, '+urname+', u was Loggined!'); console.log('Hello, '+urname+', u was Loggined!');}
    else {alert('U R NOBODY RIGHT NOW! GET OUT'); console.log('U R NOBODY RIGHT NOW! GET OUT');}    
}



function SayHi() {
    alert('HELLO DUDE!');
}


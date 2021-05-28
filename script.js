 var x,y;
 x = prompt('Введи певрое число?');
 x = parseInt(x);
 y = prompt('Введи второе число?');
 if (x > y) {
     alert("Наибольшее число = "+ x)
 } else {
     alert("Наибольшее число = "+ y)
 }

 var admin, name=('Ваше Имя');
 name = prompt('Введи сюда своё прекрасное имя');
 admin=name;
 alert("admin "+ admin) 

 do {
     var ag = prompt('Сколько тебе годиков?','Введи свой возраст сюда');
 } while(!confirm("Ты уверен, что тебе "+ ag +"?"))

 function BUTT(){
     alert ("А я о чём говорю ")
 }

function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        document.getElementById('body').style.backgroundColor = color;
}
function Name(){
    var input = document.getElementById('Name').value;
    document.getElementById('txt').innerHTML=input;
}
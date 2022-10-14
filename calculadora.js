
var num1=document.getElementById('num11');
var num2=document.getElementById('num21');
var resul=document.getElementById('resul1');
var s=document.getElementById('sum1');
var r=document.getElementById('res1');
var d=document.getElementById('div1');
var m=document.getElementById('mul1');
var b=document.getElementById('bor1');
var n1;
var n2;
var resultado;

s.addEventListener('click',function(){
    n1=num1.value;
    n2=num2.value;
    resultado=(parseFloat(n1) + parseFloat(n2));
    resul.value=resultado;

})

r.addEventListener('click',function(){
    n1=num1.value;
    n2=num2.value;
    resultado=(parseFloat(n1) - parseFloat(n2));
    resul.value=resultado;

})

d.addEventListener('click',function(){
    n1=num1.value;
    n2=num2.value;
    resultado=(parseFloat(n1) / parseFloat(n2));
    resul.value=resultado;

})

m.addEventListener('click',function(){
    n1=num1.value;
    n2=num2.value;
    resultado=(parseFloat(n1) * parseFloat(n2));
    resul.value=resultado;

})
b.addEventListener('click',function(){
    num1.value=0;
    num2.value=0;
    resul.value=0;
})
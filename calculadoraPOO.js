class Calcu{
    constructor(){
        this.n1;
        this.n2;
        this.r;
    }
    suma(num1,num2){
        this.n1=num1;
        this.n2=num2;
        this.r=this.n1+this.n2;
        return this.r;
    }
    resta(num1,num2){
        this.n1=num1;
        this.n2=num2;
        this.r=this.n1-this.n2;
        return this.r;
    }
    multi(num1,num2){
        this.n1=num1;
        this.n2=num2;
        this.r=this.n1*this.n2;
        return this.r;
    }
    divi(num1,num2){
        this.n1=num1;
        this.n2=num2;
        this.r=this.n1/this.n2;
        return this.r;
    }
    borrar(){
        return 0
    }
}

var cal=new Calcu();
var in1=document.getElementById('num12');
var in2=document.getElementById('num22');
var resul2=document.getElementById('resul2');
var s2=document.getElementById('sum2');
var r2=document.getElementById('res2');
var d2=document.getElementById('div2');
var m2=document.getElementById('mul2');
var b2=document.getElementById('bor2');

s2.addEventListener('click',function(){
    resul2.value=cal.suma(parseFloat(in1.value),parseFloat(in2.value));
})
r2.addEventListener('click',function(){
    resul2.value=cal.resta(parseFloat(in1.value),parseFloat(in2.value));
})
m2.addEventListener('click',function(){
    resul2.value=cal.multi(parseFloat(in1.value),parseFloat(in2.value));
})
d2.addEventListener('click',function(){
    resul2.value=cal.divi(parseFloat(in1.value),parseFloat(in2.value));
})
b2.addEventListener('click', function(){
    in1.value=cal.borrar();
    in2.value=cal.borrar();
    resul2.value=cal.borrar();
})
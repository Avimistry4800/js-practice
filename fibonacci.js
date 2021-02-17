function fibo (n){  //this will show the fibonacci list array of given number
var number=[0,1];
for(var i=2; i<=n ;i++){
    number[i] = number[i-1] + number[i-2] ;

}
 return number
}
var reasult = fibo(12);
console.log(reasult); 

// this will show the n'th fibonacci number in recursive method
function fibonacci (n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    else {
        return  fibonacci(n-1)+ fibonacci(n-2);
    }
}
var reasult = fibonacci(12);
console.log(reasult);

// this will show the fibonacci seris with recursive method
function fibonacci1(n){

if(n==0){
    return [0]
}
if(n==1){
    return [0,1]
}
else{
    var fibo1 = fibonacci1(n-1);
    var nextElement = fibo1[n-1] + fibo1[n-2];
    fibo1.push(nextElement);
    return fibo1
}
}
var reasult = fibonacci1(12);
console.log(reasult);
function isPrime(n){
    for(var i=2;i<n;i++){
    if (n % i == 0){
    return "the number is not prime"
    }
 
    return "the number is prime"
    
}
}
var reasult = isPrime(8888);
console.log(reasult);

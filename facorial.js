function fact (n){
    var factorial =1;
    for(i=1; i<=n; i++){
        factorial= factorial * i;
    }
    return factorial
}
var reasult = fact(7);
console.log(reasult);
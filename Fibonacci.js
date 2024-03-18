// Iteration solution

const fibonacci1 = function(num) {
    // define intial values
    let fib = [0, 1];
    
    for (let i=2; i<=num; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}
// console.log(fibonacci1(5))







// recursive solution 

const fibonacci2 = function(n, fib = [1, 1]) {
    if (fib.length==n) {
        return fib;
    }
    else {
        fib[fib.length] = fib [fib.length - 1] + fib[fib.length - 2];
        return fibonacci2(n, fib)
    }
}

console.log(fibonacci2(8))
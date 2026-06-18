//initial iteration solve using an array
function fib(n){
    let array = [1, 1];
    for(let i = 0; i < n; i++){
        const newNum = array[array.length - 1] + array[array.length - 2];
        array.push(newNum);
    }
    return array[array.length - 3];
}
console.log(fib(8));

//iteration solve that's better than array version because array version stores every single value
function fibonacci(n) {
    if (n <= 2) return 1;

    let a = 1;
    let b = 1;

    for(let i = 3; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}
console.log(fibonacci(8));

//recursive version and inefficent for speed
function fibsRec(n){
    return n <= 1 ? n : fibsRec(n - 1) + fibsRec(n - 2);
}
console.log(fibsRec(8));